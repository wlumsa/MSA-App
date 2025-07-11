import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Bug, Bell, BellOff } from "lucide-react-native";
import * as Notifications from "expo-notifications";
import {
  schedulePrayerNotification,
  cancelAllPrayerNotifications,
  getScheduledPrayerNotifications,
} from "@/Utils/prayerNotifications";

const NotificationDebug: React.FC = () => {
  const [scheduledCount, setScheduledCount] = React.useState(0);

  const checkScheduledNotifications = async () => {
    try {
      const notifications = await getScheduledPrayerNotifications();
      setScheduledCount(notifications.length);
      console.log("Scheduled notifications:", notifications);
    } catch (error) {
      console.error("Error checking notifications:", error);
    }
  };

  const testNotification = async () => {
    try {
      // Schedule a test notification for 5 seconds from now
      const testTime = new Date(Date.now() + 5000);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Test Prayer Notification",
          body: "This is a test notification for prayer time",
          sound: "default",
          data: { prayer: "test", type: "test" },
        },
        trigger: {
          date: testTime,
          repeats: false,
        },
      });
      Alert.alert(
        "Test Notification",
        "Test notification scheduled for 5 seconds from now"
      );
    } catch (error) {
      console.error("Error scheduling test notification:", error);
      Alert.alert("Error", "Failed to schedule test notification");
    }
  };

  const scheduleTestPrayer = async () => {
    try {
      // Schedule Fajr notification for 10 seconds from now
      const testTime = new Date(Date.now() + 10000);
      const [hours, minutes] = testTime.toTimeString().split(":");
      await schedulePrayerNotification("fajr", `${hours}:${minutes}`, "AM");
      Alert.alert(
        "Test Prayer",
        "Fajr notification scheduled for 10 seconds from now"
      );
    } catch (error) {
      console.error("Error scheduling test prayer:", error);
      Alert.alert("Error", "Failed to schedule test prayer notification");
    }
  };

  React.useEffect(() => {
    checkScheduledNotifications();
  }, []);

  return (
    <View className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
      <View className="flex-row items-center mb-3">
        <Bug size={20} color="#D97706" style={{ marginRight: 8 }} />
        <Text className="text-lg font-semibold text-yellow-800">
          Debug Notifications
        </Text>
      </View>

      <Text className="text-sm text-yellow-700 mb-3">
        Scheduled notifications: {scheduledCount}
      </Text>

      <View className="space-y-2">
        <Pressable
          onPress={testNotification}
          className="bg-yellow-100 px-3 py-2 rounded-lg flex-row items-center justify-center"
        >
          <Bell size={16} color="#D97706" style={{ marginRight: 8 }} />
          <Text className="text-yellow-800 font-medium">
            Test Notification (5s)
          </Text>
        </Pressable>

        <Pressable
          onPress={scheduleTestPrayer}
          className="bg-yellow-100 px-3 py-2 rounded-lg flex-row items-center justify-center"
        >
          <Bell size={16} color="#D97706" style={{ marginRight: 8 }} />
          <Text className="text-yellow-800 font-medium">Test Prayer (10s)</Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            await cancelAllPrayerNotifications();
            await checkScheduledNotifications();
            Alert.alert("Cancelled", "All prayer notifications cancelled");
          }}
          className="bg-red-100 px-3 py-2 rounded-lg flex-row items-center justify-center"
        >
          <BellOff size={16} color="#DC2626" style={{ marginRight: 8 }} />
          <Text className="text-red-700 font-medium">Cancel All</Text>
        </Pressable>

        <Pressable
          onPress={checkScheduledNotifications}
          className="bg-blue-100 px-3 py-2 rounded-lg flex-row items-center justify-center"
        >
          <Text className="text-blue-700 font-medium">Refresh Count</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NotificationDebug;
