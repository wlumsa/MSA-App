import { Text, View, Pressable, ScrollView, SafeAreaView } from "react-native";
import { Clock3, Globe, MapPin } from "lucide-react-native";
import EventCard from "../components/EventCard/EventCard";
import PrayerCard from "../components/PrayerCard/PrayerCard";
import AyahCard from "../components/AyahCard/AyahCard";
import * as Linking from 'expo-linking';
import IconComponent from "../components/Icon/Icon";
import { useState } from "react";
// import Push from "../PushNotifications";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F5FF]">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} className="px-6 pt-6">
        <View className="items-center w-full">
          {/* Header */}
          <View className="w-full mb-4">
            <Text className="text-3xl font-bold text-[#2E046D]">WLU MSA</Text>
            <Text className="text-base text-gray-600">Wilfrid Laurier Muslim Students' Association</Text>
          </View>

          {/* Cards */}
          <View className="space-y-4 w-full">
            <PrayerCard />
            <AyahCard />
            <EventCard />
          </View>

          {/* Quick Links */}
          <View className="flex-row justify-center gap-8 py-6">
            <IconComponent
              icon={<MapPin size={24} color="#9055FF" strokeWidth={2.5} />}
              link="/halalfood"
              text="Halal food"
            />
            <IconComponent
              icon={<Clock3 size={24} color="#9055FF" strokeWidth={2.5} />}
              link="/prayertimes"
              text="Prayer Times"
            />
            <IconComponent
              icon={<Globe size={24} color="#9055FF" strokeWidth={2.5} />}
              link="https://www.wlumsa.org/"
              text="Website"
            />
          </View>

          {/* Donate Button */}
          <View className="w-full px-2">
            <Pressable
              onPress={() => Linking.openURL("https://www.wlumsa.org/ramadan")}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#19033b" : "#2e046d",
                paddingVertical: 16,
                borderRadius: 12,
                marginTop: 16,
              })}
            >
              <Text className="text-white text-center font-bold text-base">
                Donate to the MSA
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
