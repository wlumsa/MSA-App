import PrayerCard from "@/app/componenets/PrayerCard"
import { ChevronLeft, ChevronRight, Calendar, Sunrise } from "lucide-react-native"
import { View, Text, Pressable, Alert } from "react-native"
export default function index() {
    return (
        <View
            className="flex h-screen px-6 pt-12 space-y-8 bg-base-100"
        >
            <View className="">
                <Calendar color={"#2E046D"} size={32} />
            </View>
            <View className="items-center p-2 rounded-xl bg-base-200 " >
                <View className="flex flex-row items-center justify-between w-full ">
                    <Pressable className="">
                        <ChevronLeft color={"#5636A7"} size={32} />
                    </Pressable>
                    <View className="flex flex-col items-center justify-center">
                        <Text className="text-lg font-bold">28 Jumada 1446 </Text>
                        <Text className="text-md text-[#994EF8]">November 30, 2024</Text>

                    </View>

                    <Pressable className="">
                        <ChevronRight color={"#5636A7"} size={32} />
                    </Pressable>
                </View>
            </View>
            <View>
                <PrayerCard />
            </View>
            <View className="flex flex-row justify-between w-full p-2 ">
                <Text className="px-8 text-lg font-bold">Prayer</Text>
                <View className="flex flex-row space-x-24 font-medium">
                    <Text className="text-lg ">Athan</Text>
                    <Text className="text-lg ">Iqama</Text>
                </View>

            </View>
            <View className="space-y-2">
                <View className="flex flex-row justify-between w-full p-2 rounded-md bg-slate-50 ">
                    <View className="flex flex-row space-x-2">
                        <Sunrise className=" color-purple-600" />
                        <Text className="text-lg text-bold ">Fajr</Text>
                    </View>
                    <View className="flex flex-row space-x-8 font-semibold">
                        <Text className="text-lg text-gray-600">6:11 am</Text>
                        <Text className="text-lg">6:15 am</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between w-full p-2 py-4 rounded-md bg-slate-50 ">
                    <View className="flex flex-row space-x-2">
                        <Sunrise className=" color-purple-600" />
                        <Text className="text-lg text-bold ">Fajr</Text>
                    </View>
                    <View className="flex flex-row space-x-8 font-semibold">
                        <Text className="text-lg text-gray-600">6:11 am</Text>
                        <Text className="text-lg">6:15 am</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between w-full p-2 py-4 rounded-md bg-slate-50 ">
                    <View className="flex flex-row space-x-2">
                        <Sunrise className=" color-purple-600" />
                        <Text className="text-lg text-bold ">Fajr</Text>
                    </View>
                    <View className="flex flex-row space-x-8 font-semibold">
                        <Text className="text-lg text-gray-600">6:11 am</Text>
                        <Text className="text-lg">6:15 am</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between w-full p-2 py-4 rounded-md bg-slate-50 ">
                    <View className="flex flex-row space-x-2">
                        <Sunrise className=" color-purple-600" />
                        <Text className="text-lg text-bold ">Fajr</Text>
                    </View>
                    <View className="flex flex-row space-x-8 font-semibold">
                        <Text className="text-lg text-gray-600">6:11 am</Text>
                        <Text className="text-lg">6:15 am</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between w-full p-2 py-4 rounded-md bg-slate-50 ">
                    <View className="flex flex-row space-x-2">
                        <Sunrise className=" color-purple-600" />
                        <Text className="text-lg text-bold ">Fajr</Text>
                    </View>
                    <View className="flex flex-row space-x-8 font-semibold">
                        <Text className="text-lg text-gray-600">6:11 am</Text>
                        <Text className="text-lg">6:15 am</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}