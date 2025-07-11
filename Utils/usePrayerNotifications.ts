import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import {
  registerForPushNotificationsAsync,
  scheduleAllPrayerNotifications,
  cancelAllPrayerNotifications,
  getScheduledPrayerNotifications,
  arePrayerNotificationsEnabled,
  requestNotificationPermissions,
} from './prayerNotifications';

export interface PrayerNotificationState {
  isEnabled: boolean;
  isScheduled: boolean;
  scheduledCount: number;
  isLoading: boolean;
  error: string | null;
}

export function usePrayerNotifications() {
  const [state, setState] = useState<PrayerNotificationState>({
    isEnabled: false,
    isScheduled: false,
    scheduledCount: 0,
    isLoading: true,
    error: null,
  });

  const notificationListener = useRef<Notifications.EventSubscription>();
  const responseListener = useRef<Notifications.EventSubscription>();

  // Initialize notifications
  useEffect(() => {
    initializeNotifications();
    
    // Set up notification listeners
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification response:', response);
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  const initializeNotifications = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Check if notifications are enabled
      const enabled = await arePrayerNotificationsEnabled();
      
      if (!enabled) {
        setState(prev => ({
          ...prev,
          isEnabled: false,
          isScheduled: false,
          scheduledCount: 0,
          isLoading: false,
        }));
        return;
      }

      // Register for push notifications
      await registerForPushNotificationsAsync();
      
      // Check scheduled notifications
      const scheduledNotifications = await getScheduledPrayerNotifications();
      
      setState(prev => ({
        ...prev,
        isEnabled: true,
        isScheduled: scheduledNotifications.length > 0,
        scheduledCount: scheduledNotifications.length,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }));
    }
  };

  const enableNotifications = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const granted = await requestNotificationPermissions();
      
      if (granted) {
        await registerForPushNotificationsAsync();
        setState(prev => ({
          ...prev,
          isEnabled: true,
          isLoading: false,
        }));
      } else {
        setState(prev => ({
          ...prev,
          isEnabled: false,
          isLoading: false,
          error: 'Notification permissions denied',
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }));
    }
  };

  const scheduleNotifications = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      if (!state.isEnabled) {
        const granted = await requestNotificationPermissions();
        if (!granted) {
          setState(prev => ({
            ...prev,
            isLoading: false,
            error: 'Notification permissions required',
          }));
          return;
        }
      }
      
      await scheduleAllPrayerNotifications();
      
      // Update state with new scheduled notifications
      const scheduledNotifications = await getScheduledPrayerNotifications();
      
      setState(prev => ({
        ...prev,
        isEnabled: true,
        isScheduled: true,
        scheduledCount: scheduledNotifications.length,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }));
    }
  };

  const cancelNotifications = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await cancelAllPrayerNotifications();
      
      setState(prev => ({
        ...prev,
        isScheduled: false,
        scheduledCount: 0,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }));
    }
  };

  const refreshNotifications = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const enabled = await arePrayerNotificationsEnabled();
      const scheduledNotifications = await getScheduledPrayerNotifications();
      
      setState(prev => ({
        ...prev,
        isEnabled: enabled,
        isScheduled: scheduledNotifications.length > 0,
        scheduledCount: scheduledNotifications.length,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      }));
    }
  };

  return {
    ...state,
    enableNotifications,
    scheduleNotifications,
    cancelNotifications,
    refreshNotifications,
  };
} 