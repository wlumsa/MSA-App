import React from "react";
import { StatusBar, View, Text, Pressable, SafeAreaView,  Linking, Image } from "react-native";
import { useState } from "react";
import MSA_Logo from "../assets/images/MSA_Logo.png"; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {MessageCircle, Globe, Banknote, CircleUser, Pencil, House, Link, MapPin, ChevronRight, TvMinimalPlay, AlignJustify, AlignStartHorizontal} from "lucide-react-native";
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
          drawerLabel: () => <AlignJustify size={24} color="#5636A7" />, 
          drawerIcon: () => <AlignJustify size={24} color="#5636A7" />, 
          drawerHideStatusBarOnOpen: true,
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
            
                <View className="flex flex-row   w-full px-4 pb-6">
               <View className="flex flex-row items-center gap-4">
                  <Image source={MSA_Logo} style={{ width: 50, height: 50 }} />
                  <Text className="text-4xl font-bold text-[#2E046D] pb-2 flex items-start justify-center ">
                    WLU MSA
                  </Text>
                </View>
                  <Pressable onPress={props.navigation.closeDrawer}>
                  </Pressable>
                </View>
                
                <View className="flex flex-col  gap-4  p-4 rounded-lg my-4 w-full bg-white  shadow-md shadow-slate-200 ">
               
                    <Pressable 
                    onPress={() => props.navigation.navigate("index")} 
                    className={`flex flex-row items-center gap-4 p-4 justify-between border-b border-gray-200 ${props.state.routeNames[props.state.index] === "index" ? "bg-[#ededed] rounded-xl  " : ""}`}
                    >
                    <View className="flex flex-row items-center gap-4">
                      <House size={20} color="#5636A7" strokeWidth={2.5} />
                      <Text className=" text-[#696573] text-md"> Home</Text>
                    </View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
                    </Pressable>

                  <Pressable onPress={() => props.navigation.navigate("index")} className={`flex flex-row items-center gap-4 p-4 justify-between border-b border-gray-200 ${props.state.routeNames[props.state.index] === "#" ? "bg-[#ededed] rounded-xl  " : ""} `}>
                  <View className="flex flex-row items-center gap-4">
                    <House size={20} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-md "> Prayer Timings</Text>
                  </View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />

                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")}  className={`flex flex-row items-center gap-4 p-4 justify-between border-b border-gray-200 ${props.state.routeNames[props.state.index] === "#" ? "bg-[#ededed] rounded-xl  " : ""}`}>
                   <View className="flex flex-row items-center gap-4">
                      <Link size={20} color="#5636A7" strokeWidth={2.5} />
                      <Text className=" text-[#696573] text-md">Events</Text>
                   </View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />

                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")}  className={`flex flex-row items-center gap-4 p-4 justify-between  ${props.state.routeNames[props.state.index] === "#" ? "bg-[#ededed] rounded-xl  " : ""}`}>
                    <View className="flex flex-row items-center gap-4">
                    <MapPin size={20} color="#5636A7" strokeWidth={2.5} />
                    <Text className=" text-[#696573] text-md">Halal Food Directory</Text>
                    </View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />

                  </Pressable>
                </View>
                  {/* External links */}
               <View>
                <Text className="text-sm  text-gray-500 p-4 ">
                  Quick Links
                </Text>
                <View className="bg-white rounded-lg gap-4 p-4  shadow-md shadow-slate-200 ">
                <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-4   border-b  border-gray-200" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <Pencil size={20} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-md ">Feedback Form</Text>
                 </View>
                   <View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                  <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-4   border-b  border-gray-200" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <CircleUser size={20} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-md ">Become a General Member</Text>
                 </View>
                   <View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-4   border-b  border-gray-200" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <Banknote size={20} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-md ">Donate to the MSA</Text>
                 </View>
                   <View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                  <Pressable  className=" flex flex-row  justify-between items-center gap-4 p-4  w-full" onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                 <View className="flex flex-row items-center gap-4">
                    <MessageCircle size={20} color="#5636A7"  className="" strokeWidth={2.5}/>
                    <Text className=" text-[#696573] - text-md ">Contact Us</Text>
                 </View>
                   <View>
                    <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
                   </View>
                  </Pressable>
                  </View>
               </View>

               <View>
                {/* Socials */}
                <Text className="text-sm  text-gray-500 p-4 ">
                  Follow us
                </Text>
                <View className="  gap-10 items-center  justify-center p-4 rounded-xl  w-full flex flex-row flex-wrap ">
                  <Pressable onPress= { () => Linking.openURL('https://www.instagram.com/wlumsa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="instagram" size={20} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.facebook.com/wlumsa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="facebook" size={20} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.linkedin.com/company/wlu-msa/')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="linkedin" size={20} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://chat.whatsapp.com/BslJGlMMnAM7TRss3Y1Va0')} className="items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <FontAwesome6 name="whatsapp" size={20} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://wlumsa.org')} className="items-center justify-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <Globe size={20} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.youtube.com/@WLUMSA')} className="items-center justify-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl">
                    <TvMinimalPlay size={20} color="#5636A7"  />
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
