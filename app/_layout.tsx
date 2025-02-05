import React from "react";
import { StatusBar, View, Text, Pressable, SafeAreaView,  Linking, Image } from "react-native";
import MSA_Logo from "../assets/images/MSA_Logo.png";  
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {MessageCircle, Globe, Banknote, CircleUser, Pencil, House, Link, MapPin, ChevronRight, TvMinimalPlay} from "lucide-react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#F8F5FF" barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1,  backgroundColor: '#F8F5FF' }}>
      <Drawer  
      
        screenOptions={{
          
          drawerType: "front",
          drawerStyle: {
            backgroundColor: "#F8F5FF",
            width: "80%",
          }
        }}
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
            <SafeAreaView>
            
                <View className="flex flex-row   w-full px-4 py-6">
               <View className="flex flex-row items-center gap-4">
                  <Image source={MSA_Logo} style={{ width: 50, height: 50 }} />
                  <Text className="text-4xl font-bold text-[#2E046D] pb-2 flex items-start justify-center ">
                    WLU MSA
                  </Text>
                </View>
                  <Pressable onPress={props.navigation.closeDrawer}>
                  </Pressable>
                </View>
                
                <View className="flex flex-col  gap-4  p-4 rounded-xl my-4 w-full  ">
               
                  <Pressable onPress={() => props.navigation.navigate("index")} className="flex flex-row items-center gap-4 p-4">
                    <House size={24} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-lg"> Home</Text>
                  </Pressable>

                  <Pressable onPress={() => props.navigation.navigate("index")} className="flex flex-row items-center gap-4  p-4"> 
                  <House size={24} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-lg "> Prayer Timings</Text>
                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")} className="flex flex-row items-center gap-4  p-4">
                    <Link size={24} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-lg">Events</Text>
                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")} className="flex flex-row items-center gap-4  p-4">
                    <MapPin size={24} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-lg"> Halal Food Directory</Text>
                  </Pressable>
                </View>
                  {/* External links */}
               <View>
                <Text className="text-xl font-bold text-[#2E046D] pb-2 ">
                  Quick Links
                </Text>
                <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-6  w-full border-b  border-gray-400" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <Pencil size={24} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-lg ">Feedback Form</Text>
                 </View>
                   <View>
                    <ChevronRight size={24} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                  <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-6  w-full border-b  border-gray-400" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <CircleUser size={24} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-lg ">Become a General Member</Text>
                 </View>
                   <View>
                    <ChevronRight size={24} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-6  w-full border-b  border-gray-400" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <Banknote size={24} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-lg ">Donate to the MSA</Text>
                 </View>
                   <View>
                    <ChevronRight size={24} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                  <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-6  w-full border-b  border-gray-400" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <MessageCircle size={24} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-lg ">Contact Us</Text>
                 </View>
                   <View>
                    <ChevronRight size={24} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
               </View>

               <View>
                {/* Socials */}
                <Text className="text-2xl font-bold text-[#2E046D] pb-2 mt-4 ">
                  Follow us
                </Text>
                <View className="  gap-8 items-center p-4 rounded-xl  w-full grid grid-cols-3 ">
                  <Pressable onPress= { () => Linking.openURL('https://www.instagram.com/wlumsa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="instagram" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.facebook.com/wlumsa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="facebook" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.linkedin.com/company/wlu-msa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="linkedin" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://chat.whatsapp.com/BslJGlMMnAM7TRss3Y1Va0')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="whatsapp" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://wlumsa.org')} className="items-center justify-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <Globe size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.youtube.com/@WLUMSA')} className="items-center justify-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <TvMinimalPlay size={24} color="#5636A7"  />
                  </Pressable>
        
                </View>
               </View>

            </SafeAreaView>
            </DrawerContentScrollView>
          ); 

        }
        }
      >
       
      </Drawer>
    </GestureHandlerRootView>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F8F5FF",
            },
          }}
        >
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView> */}
    </>
  );
}
