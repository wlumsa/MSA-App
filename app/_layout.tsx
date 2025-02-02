import React from "react";
import { StatusBar, View, Text, Pressable, SafeAreaView,  Linking, Image } from "react-native";
import MSA_Logo from "../assets/images/MSA_Logo.png";  
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerItemList } from "@react-navigation/drawer";

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
            
                <View className="flex flex-row  gap-4 w-full px-4 py-6">
               <View className="flex flex-row items-center gap-4">
                  <Image source={MSA_Logo} style={{ width: 50, height: 50 }} />
                  <Text className="text-4xl font-bold text-[#2E046D] pb-2 flex items-start justify-center ">
                    WLU MSA
                  </Text>
                </View>
                  <Pressable onPress={props.navigation.closeDrawer}>
                  </Pressable>
                </View>
                  {/* Custom Navigation Buttons */}
                <View className="flex flex-col  gap-8  p-4 rounded-xl my-4 w-full d ">
                  <Pressable onPress={() => props.navigation.navigate("index")} >
                    <Text className="font-semibold text-[#696573]"> Home</Text>
                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")}>
                    <Text className="font-semibold text-[#696573] "> Prayer Timings</Text>
                  </Pressable>
                  <Pressable onPress={() => props.navigation.navigate("index")}>
                    <Text className="font-semibold text-[#696573] "> Halal Food Directory</Text>
                  </Pressable>
                </View>
               <View>
                <Text className="text-2xl font-bold text-[#2E046D] pb-2 ">
                  Quick Links
                </Text>
               <Pressable  className=" flex flex-row items-center gap-4  p-4 rounded-xl my-4  w-full " onPress= { () => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdh3Uz89waM9hg-sI-yl9AuxJCILohHR6bPfweeLk1TsdXuWg/viewform')}>
                  <FontAwesome6 name="pencil" size={20} color="#5636A7"  className="w-8"/>
                    <Text className="text-[#696573] font-semibold">Feedback Form</Text>
                  </Pressable>
                <Pressable  className="flex flex-row gap-4 items-center p-4 rounded-xl my-4 w-full " onPress= { () => Linking.openURL('https://www.wlumsa.org/guidebook')}>
                    <FontAwesome6 name="person" size={20} color="#5636A7"  className="w-8"/>
                    <Text className="text-[#696573] font-semibold">Become a General Member</Text>
                </Pressable>
                <Pressable  className=" flex flex-row gap-4 items-center p-4 rounded-xl my-4 w-full  " onPress= { () => Linking.openURL('https://www.wlumsa.org/ramadan')}>
                    <FontAwesome6 name="money-bill" size={20} color="#5636A7"  className="w-8"/>
                    <Text className=" text-[#696573] font-semibold">Donate to the MSA</Text>
                  </Pressable>
                  <Pressable  className=" flex flex-row  items-center gap-4 p-4 rounded-xl my-4 w-full  " onPress= { () => Linking.openURL('https://www.wlumsa.org/contact')}>
                    {/* <Ionicons name="mail" size={20} color="#5636A7"  className="w-8"/> */}
                    <Text className=" text-[#696573] font-semibold  ">Contact Us</Text>
                  </Pressable>
               </View>

               <View>
                <Text className="text-2xl font-bold text-[#2E046D] pb-2 ">
                  Follow us
                </Text>
                <View className="flex flex-row gap-12 items-center p-4 rounded-xl my-4 w-full  ">
                  <Pressable onPress= { () => Linking.openURL('https://www.instagram.com/wlumsa/')}>
                    <FontAwesome6 name="instagram" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.facebook.com/wlumsa/')}>
                    <FontAwesome6 name="facebook" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://www.linkedin.com/company/wlu-msa/')}>
                    <FontAwesome6 name="linkedin" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://chat.whatsapp.com/BslJGlMMnAM7TRss3Y1Va0')}>
                    <FontAwesome6 name="whatsapp" size={24} color="#5636A7" />
                  </Pressable>
                  <Pressable onPress= { () => Linking.openURL('https://wlumsa.org')}>
                    <Ionicons name="globe-sharp" size={24} color="#5636A7"  className="w-8"/>
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
