import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { scheduleAllPrayerNotifications, cancelAllPrayerNotifications } from './prayerNotifications';

const BACKGROUND_FETCH_TASK = 'background-fetch-prayer-notifications';

// Define the background task
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log('Background task: Rescheduling prayer notifications');
    
    // Cancel existing notifications
    await cancelAllPrayerNotifications();
    
    // Schedule new notifications for today
    await scheduleAllPrayerNotifications();
    
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Background task error:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

// Register the background task
export async function registerBackgroundTask() {
  try {
    await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 60 * 60 * 24, // 24 hours
      stopOnTerminate: false,
      startOnBoot: true,
    });
    console.log('Background task registered');
  } catch (error) {
    console.error('Error registering background task:', error);
  }
}

// Unregister the background task
export async function unregisterBackgroundTask() {
  try {
    await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
    console.log('Background task unregistered');
  } catch (error) {
    console.error('Error unregistering background task:', error);
  }
}

// Check if background task is registered
export async function isBackgroundTaskRegistered(): Promise<boolean> {
  try {
    const status = await BackgroundFetch.getStatusAsync();
    return status === BackgroundFetch.BackgroundFetchStatus.Available;
  } catch (error) {
    console.error('Error checking background task status:', error);
    return false;
  }
} 