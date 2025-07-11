import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import {
  Bell,
  BellOff,
  Settings,
  CheckCircle,
  XCircle,
} from "lucide-react-native";
import { usePrayerNotifications } from "@/Utils/usePrayerNotifications";

interface NotificationSettingsProps {
  className?: string;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  className = "",
}) => {
  const {
    isEnabled,
    isScheduled,
    scheduledCount,
    isLoading,
    error,
    enableNotifications,
    scheduleNotifications,
    cancelNotifications,
    refreshNotifications,
  } = usePrayerNotifications();

  const handleEnableNotifications = async () => {
    if (!isEnabled) {
      await enableNotifications();
    }
  };

  const handleToggleNotifications = async () => {
    if (isScheduled) {
      Alert.alert(
        "Cancel Prayer Notifications",
        "Are you sure you want to cancel all prayer notifications?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Yes", onPress: cancelNotifications },
        ]
      );
    } else {
      await scheduleNotifications();
    }
  };

  const getStatusText = () => {
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error}`;
    if (!isEnabled) return "Notifications disabled";
    if (isScheduled) return `${scheduledCount} notifications scheduled`;
    return "Notifications enabled but not scheduled";
  };

  const getStatusColor = () => {
    if (isLoading || error) return "text-gray-500";
    if (!isEnabled) return "text-red-500";
    if (isScheduled) return "text-green-500";
    return "text-yellow-500";
  };

  const getStatusIcon = () => {
    if (isLoading) return <Settings size={20} color="#6B7280" />;
    if (error) return <XCircle size={20} color="#EF4444" />;
    if (!isEnabled) return <BellOff size={20} color="#EF4444" />;
    if (isScheduled) return <CheckCircle size={20} color="#10B981" />;
    return <Bell size={20} color="#F59E0B" />;
  };

  return (
    <View
      className={`bg-foreground rounded-xl p-4 shadow-md shadow-slate-200 ${className}`}
    >
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold text-primary">
          Prayer Notifications
        </Text>
        {getStatusIcon()}
      </View>

      <Text className={`text-sm mb-4 ${getStatusColor()}`}>
        {getStatusText()}
      </Text>

      <View className="space-y-3">
        {!isEnabled && (
          <Pressable
            onPress={handleEnableNotifications}
            disabled={isLoading}
            className={`bg-primary px-4 py-3 rounded-lg flex-row items-center justify-center ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            <Bell size={18} color="white" style={{ marginRight: 8 }} />
            <Text className="text-white font-medium">Enable Notifications</Text>
          </Pressable>
        )}

        {isEnabled && (
          <Pressable
            onPress={handleToggleNotifications}
            disabled={isLoading}
            className={`px-4 py-3 rounded-lg flex-row items-center justify-center border ${
              isScheduled
                ? "bg-red-50 border-red-200"
                : "bg-green-50 border-green-200"
            } ${isLoading ? "opacity-50" : ""}`}
          >
            {isScheduled ? (
              <>
                <BellOff size={18} color="#DC2626" style={{ marginRight: 8 }} />
                <Text className="text-red-700 font-medium">
                  Cancel Notifications
                </Text>
              </>
            ) : (
              <>
                <Bell size={18} color="#059669" style={{ marginRight: 8 }} />
                <Text className="text-green-700 font-medium">
                  Schedule Notifications
                </Text>
              </>
            )}
          </Pressable>
        )}

        {isEnabled && (
          <Pressable
            onPress={refreshNotifications}
            disabled={isLoading}
            className={`bg-gray-100 px-4 py-2 rounded-lg flex-row items-center justify-center ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            <Settings size={16} color="#6B7280" style={{ marginRight: 8 }} />
            <Text className="text-gray-600 font-medium">Refresh Status</Text>
          </Pressable>
        )}
      </View>

      {isScheduled && (
        <View className="mt-4 p-3 bg-green-50 rounded-lg">
          <Text className="text-green-800 text-sm">
            You will receive notifications for all 5 daily prayers at their
            iqama times.
          </Text>
        </View>
      )}

      {error && (
        <View className="mt-4 p-3 bg-red-50 rounded-lg">
          <Text className="text-red-800 text-sm">{error}</Text>
        </View>
      )}
    </View>
  );
};

export default NotificationSettings;
