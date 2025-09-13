import { Text, View, Pressable, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { getNextPrayerTime } from "@/Utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NextPrayerResponse } from "@/Utils/types";

const PrayerCard = () => {
  const {
    data: nextPrayer,
    isLoading,
    error,
    refetch,
  } = useQuery<NextPrayerResponse | null>({
    queryKey: ["nextPrayer"],
    queryFn: getNextPrayerTime,
    retry: 2,
    retryDelay: 1000,
  });

  const convertElapsedTimeToString = (elapsedTime: number) => {
    const hours = Math.floor(elapsedTime / 60);
    const minutes = elapsedTime % 60;
    const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
    const minutesString =
      minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "";
    return `${hoursString} ${minutesString}`.trim();
  };

  // Loading state
  if (isLoading) {
    return (
      <View className="flex flex-col w-full shadow-md shadow-slate-200 justify-between">
        <LinearGradient
          colors={["#8D6EDB", "#5636A7", "#5636A7"]}
          start={{ x: -0.1, y: 0.5 }}
          style={{ padding: 20, borderRadius: 12, width: "100%" }}
        >
          <View className="flex flex-row items-center justify-center py-8">
            <ActivityIndicator size="large" color="#ffffff" />
            <Text className="text-white ml-3" style={{ fontFamily: 'Inter' }}>Loading prayer times...</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View className="flex flex-col w-full shadow-md shadow-slate-200 justify-between">
        <LinearGradient
          colors={["#8D6EDB", "#5636A7", "#5636A7"]}
          start={{ x: -0.1, y: 0.5 }}
          style={{ padding: 20, borderRadius: 12, width: "100%" }}
        >
          <View className="flex flex-col items-center py-4">
            <Text className="text-white text-center mb-2" style={{ fontFamily: 'Inter' }}>
              Unable to load prayer times
            </Text>
            <Pressable
              onPress={() => refetch()}
              className="bg-white/20 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold" style={{ fontFamily: 'Inter-Bold' }}>Retry</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    );
  }

  // No data state
  if (!nextPrayer) {
    return (
      <View className="flex flex-col w-full shadow-md shadow-slate-200 justify-between">
        <LinearGradient
          colors={["#8D6EDB", "#5636A7", "#5636A7"]}
          start={{ x: -0.1, y: 0.5 }}
          style={{ padding: 20, borderRadius: 12, width: "100%" }}
        >
          <View className="flex flex-col items-center py-4">
            <Text className="text-white text-center" style={{ fontFamily: 'Inter' }}>
              No prayer times available
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }

  // Success state
  return (
    <View className="flex flex-col w-full shadow-md shadow-slate-200 justify-between">
      <Link href="/prayertimes">
        <LinearGradient
          colors={["#8D6EDB", "#5636A7", "#5636A7"]}
          start={{ x: -0.1, y: 0.5 }}
          style={{ padding: 20, borderRadius: 12, width: "100%" }}
        >
          <View>
            <Text className="text-white" style={{ fontFamily: 'Inter', fontSize: 16 }}>Upcoming Salah</Text>
          </View>
          <View className="flex flex-row justify-between py-4 font-bold w-full">
            <Text className=" font-bold text-white" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 36 }}>
              {nextPrayer.nextPrayer.name}
            </Text>
            <Text className="font-bold text-white" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 36 }}>
              {nextPrayer.nextPrayer.time} {nextPrayer.nextPrayer.ampm}
            </Text>
          </View>

          <View className="flex flex-row justify-between">
            <Text className="text-white" style={{ fontFamily: 'Inter', fontSize: 14 }}>
              in {convertElapsedTimeToString(nextPrayer.elapsedTime)}
            </Text>
            <Pressable>
              <Link href="/prayertimes" />
            </Pressable>
          </View>
        </LinearGradient>
      </Link>
    </View>
  );
};

export default PrayerCard;
