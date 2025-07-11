import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { getPrayerTimingsForDay } from './api';
import { timeToMinutes } from './utils';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Prayer names and their notification titles
const PRAYER_INFO = {
  fajr: { name: 'Fajr', title: 'Fajr Iqama Time', body: 'It\'s time for Fajr prayer' },
  dhuhr: { name: 'Dhuhr', title: 'Dhuhr Iqama Time', body: 'It\'s time for Dhuhr prayer' },
  asr: { name: 'Asr', title: 'Asr Iqama Time', body: 'It\'s time for Asr prayer' },
  maghrib: { name: 'Maghrib', title: 'Maghrib Iqama Time', body: 'It\'s time for Maghrib prayer' },
  isha: { name: 'Isha', title: 'Isha Iqama Time', body: 'It\'s time for Isha prayer' },
};

// Register for push notifications
export async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('prayer-notifications', {
      name: 'Prayer Notifications',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: 'default',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return;
    }
    
    const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    
    if (!projectId) {
      console.log('Project ID not found');
      return;
    }
    
    try {
      const pushTokenString = (await Notifications.getExpoPushTokenAsync({
        projectId,
      })).data;
      token = pushTokenString;
    } catch (error) {
      console.log('Error getting push token:', error);
    }
  } else {
    console.log('Must use physical device for Push Notifications');
  }

  return token;
}

// Convert time string to Date object for today
function getPrayerDateTime(timeString: string, ampm: string): Date {
  const today = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  
  let hour = hours;
  if (ampm === 'PM' && hours !== 12) {
    hour += 12;
  } else if (ampm === 'AM' && hours === 12) {
    hour = 0;
  }
  
  const prayerTime = new Date(today);
  prayerTime.setHours(hour, minutes, 0, 0);
  
  // If prayer time has passed today, schedule for tomorrow
  if (prayerTime <= new Date()) {
    prayerTime.setDate(prayerTime.getDate() + 1);
  }
  
  return prayerTime;
}

// Schedule notification for a specific prayer
export async function schedulePrayerNotification(
  prayerKey: keyof typeof PRAYER_INFO,
  timeString: string,
  ampm: string
) {
  try {
    const prayerInfo = PRAYER_INFO[prayerKey];
    const notificationTime = getPrayerDateTime(timeString, ampm);
    
    // Cancel any existing notification for this prayer
    await cancelPrayerNotification(prayerKey);
    
    // Schedule new notification
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: prayerInfo.title,
        body: prayerInfo.body,
        sound: 'default',
        data: { prayer: prayerKey, type: 'iqama' },
      },
      trigger: {
        date: notificationTime,
        repeats: false,
      },
    });
    
    console.log(`Scheduled ${prayerKey} notification for ${notificationTime.toLocaleString()}`);
    return notificationId;
  } catch (error) {
    console.error(`Error scheduling ${prayerKey} notification:`, error);
  }
}

// Cancel notification for a specific prayer
export async function cancelPrayerNotification(prayerKey: keyof typeof PRAYER_INFO) {
  try {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    const notificationToCancel = scheduledNotifications.find(
      notification => notification.content.data?.prayer === prayerKey
    );
    
    if (notificationToCancel) {
      await Notifications.cancelScheduledNotificationAsync(notificationToCancel.identifier);
      console.log(`Cancelled ${prayerKey} notification`);
    }
  } catch (error) {
    console.error(`Error cancelling ${prayerKey} notification:`, error);
  }
}

// Schedule all prayer notifications for today
export async function scheduleAllPrayerNotifications() {
  try {
    console.log('Fetching prayer times for today...');
    const todayPrayers = await getPrayerTimingsForDay(0);
    
    if (!todayPrayers) {
      console.log('No prayer times found for today');
      return;
    }
    
    console.log('Prayer times fetched, scheduling notifications...');
    
    // Schedule notifications for each prayer with timeout protection
    const schedulePromises = [
      schedulePrayerNotification('fajr', todayPrayers.fajr, 'AM'),
      schedulePrayerNotification('dhuhr', todayPrayers.dhuhr, 'PM'),
      schedulePrayerNotification('asr', todayPrayers.asr, 'PM'),
      schedulePrayerNotification('maghrib', todayPrayers.maghrib, 'PM'),
      schedulePrayerNotification('isha', todayPrayers.isha, 'PM')
    ];
    
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Scheduling timeout')), 10000)
    );
    
    await Promise.race([
      Promise.all(schedulePromises),
      timeoutPromise
    ]);
    
    console.log('All prayer notifications scheduled for today');
  } catch (error) {
    console.error('Error scheduling prayer notifications:', error);
  }
}

// Cancel all prayer notifications
export async function cancelAllPrayerNotifications() {
  try {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    const prayerNotifications = scheduledNotifications.filter(
      notification => notification.content.data?.type === 'iqama'
    );
    
    for (const notification of prayerNotifications) {
      await Notifications.cancelScheduledNotificationAsync(notification.identifier);
    }
    
    console.log(`Cancelled ${prayerNotifications.length} prayer notifications`);
  } catch (error) {
    console.error('Error cancelling prayer notifications:', error);
  }
}

// Get all scheduled prayer notifications
export async function getScheduledPrayerNotifications() {
  try {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    return scheduledNotifications.filter(
      notification => notification.content.data?.type === 'iqama'
    );
  } catch (error) {
    console.error('Error getting scheduled notifications:', error);
    return [];
  }
}

// Check if prayer notifications are enabled
export async function arePrayerNotificationsEnabled(): Promise<boolean> {
  try {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error checking notification permissions:', error);
    return false;
  }
}

// Request notification permissions
export async function requestNotificationPermissions(): Promise<boolean> {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
} 