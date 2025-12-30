import { Text, View, Pressable, ScrollView, Image } from "react-native";
import { Clock3, Globe, MapPin } from "lucide-react-native";
import MSA_Logo from "../../assets/images/MSA_Logo.png"
import EventCard from "../components/EventCard/EventCard";
import PrayerCard from "../components/PrayerCard/PrayerCard";
import AyahCard from "../components/AyahCard/AyahCard";
import { Screen } from "../components/Screen/Screen"
import IconComponent from "../components/Icon/Icon";
import { useState } from "react";
// import Push from "../PushNotifications";

export default function Index() {

  const [isPressed, setIsPressed] = useState(false);

  return (
    <Screen >
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} className="px-6 pt-6">
        <View className="w-full">
          {/* Header with Donate Button */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="">
             <View className="flex flex-row gap-2 items-center justify-start">
             <Image
                   source={MSA_Logo}
                   style={{ width: 40, height: 40 }}
                        />
              <Text className=" font-bold text-primary" style={{
                fontFamily: 'LibreBaskerville-Bold',
                fontSize: 32,
                letterSpacing: 1.2,
                textShadowColor: 'rgba(0, 0, 0, 0.12)',
                textShadowOffset: { width: 0, height: 1.5 },
                textShadowRadius: 2.5,
                lineHeight: 36
              }}>WLU MSA</Text>
             </View>
              <Text className="text-sm text-gray-800 dark:text-gray-200" style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '500',
                lineHeight: 20,
                marginTop: 3,
                letterSpacing: 0.2
              }}>Wilfrid Laurier Muslim Students' Association</Text>
            </View>

            {/* Donate Button - Top Right */}
            {/* <Pressable
              onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfwn-5xuz58a9nzINqZoofyiMr-C7lphMs5KesnzVOB1jrXNg/viewform")}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              className={`bg-[#e7ac3b] px-2 py-3 rounded-lg ${isPressed ? "opacity-80" : ""}`}
            >
              <Text className="text-black font-semibold text-base" style={{ fontFamily: 'Inter-Bold', fontSize: 16, fontWeight: '700' }}>
                Donate
              </Text>
            </Pressable> */}
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
    </Screen>
  );
}
