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

  const [isPressed, setIsPressed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} className="px-6 pt-6">
        <View className="items-center w-full">
          {/* Header */}
          <View className="w-full mb-4">
            <View className="items-center mb-4">
              <Text className="text-3xl font-bold text-primary text-center">WLU MSA</Text>
              <Text className="text-base text-gray-600 dark:text-gray-400 text-center">Wilfrid Laurier Muslim Students' Association</Text>
            </View>

            {/* Donate Button */}
            <View className="items-center">
              <Pressable
                onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfwn-5xuz58a9nzINqZoofyiMr-C7lphMs5KesnzVOB1jrXNg/viewform")}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                className={`bg-[#e7ac3b] px-6 py-3 rounded-lg ${isPressed ? "opacity-80" : ""}`}
              >
                <Text className="text-black text-center font-semibold text-base">
                  Donate
                </Text>
              </Pressable>
            </View>
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
              link="/Halalfood"
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

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
