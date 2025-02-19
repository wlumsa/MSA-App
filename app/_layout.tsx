import React from "react";
import { StatusBar, View, Text, Pressable, SafeAreaView, Image, TouchableOpacity } from "react-native";
import MSA_Logo from "../assets/images/MSA_Logo.png"; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {MessageCircle, Globe, Banknote, CircleUser, Pencil, House, Link, MapPin, ChevronRight, TvMinimalPlay, AlignJustify, AlignStartHorizontal, Clock3} from "lucide-react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ButtonComponent } from "./components/ButtonComponent";
import { Drawer } from "expo-router/drawer";
import ScreenButtonComponent from "./components/ScreenButtonComponent";
export default function RootLayout() {

  return (
    <>
      <StatusBar backgroundColor="#F8F5FF" barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1,  backgroundColor: '#F8F5FF' }}>
      <Drawer 
        screenOptions={({ navigation }) => ({  
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                  <AlignJustify size={24} color="#5636A7" style={{ marginLeft: 30 }} strokeWidth={2.5} /> 
              </TouchableOpacity>
          ),
          drawerHideStatusBarOnOpen: true,
          drawerType: "front",
          drawerStyle: {
              backgroundColor: "#F8F5FF",
              width: "80%",
          },
      })}
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

                  <ScreenButtonComponent
                    icon={<House size={20} color="#5636A7" strokeWidth={2.5} />}
                    screenName="/(tabs)/index"
                    text="Home"
                    navigation={props.navigation}
                    state={props.state}
                  />
                  <ScreenButtonComponent
                    icon={<Clock3 size={20} color="#5636A7" strokeWidth={2.5} />}
                    screenName=""
                    text="Prayer Timings"
                    navigation={props.navigation}
                    state={props.state}
                  />
                  <ScreenButtonComponent
                    icon={<Link size={20} color="#5636A7" strokeWidth={2.5} />}
                    screenName="events"
                    text="Events"
                    navigation={props.navigation}
                    state={props.state} 
                  />
                  <ScreenButtonComponent
                    icon={<MapPin size={20} color="#5636A7" strokeWidth={2.5} />}
                    screenName="halalfood"
                    text="Halal Food Directory"
                    navigation={props.navigation}
                    state={props.state}
                    lastItem={true}
                  />
 
                </View>
                  {/* External links */}
               <View>
                <Text className="text-sm  text-gray-500 p-4 ">
                  Quick Links
                </Text>
                <View className="bg-white rounded-lg gap-4 p-4  shadow-md shadow-slate-200 ">
                <ButtonComponent
                  icon={<Pencil size={20} color="#5636A7"  /> }
                  link="https://www.wlumsa.org/contact"
                  text="Feedback Form"
                  type="2"
                />
                <ButtonComponent
                  icon={<CircleUser size={20} color="#5636A7"  /> }
                  link="https://www.wlumsa.org/contact"
                  text="Become a General Member"
                  type="2"

                />
                  
                <ButtonComponent
                  icon={<Banknote size={20} color="#5636A7"  /> }
                  link="https://www.wlumsa.org/contact"
                  text="Donate to the MSA"
                  type="2"
                />
                <ButtonComponent  
                  icon={<MessageCircle size={20} color="#5636A7"  /> }
                  link="https://www.wlumsa.org/contact"
                  text="Contact Us"
                  type="2"
                  lastItem={true}
                />
                  
                  </View>
               </View>

               <View>
                {/* Socials */}
                <Text className="text-sm  text-gray-500 p-4 ">
                  Follow us
                </Text>
                <View className="  gap-10 items-center  justify-center p-4 rounded-xl  w-full flex flex-row flex-wrap ">
                <ButtonComponent
                    icon={ <FontAwesome6 name="instagram" size={20} color="#5636A7" /> }
                    type="1"
                    link="https://www.instagram.com/wlumsa/"
                  />
    
                  <ButtonComponent
                    icon={ <FontAwesome6 name="facebook" size={20} color="#5636A7" /> }
                    type="1"
                    link="https://www.facebook.com/wlumsa/"
                  />
      
                  <ButtonComponent
                    icon={<FontAwesome6 name="linkedin" size={20} color="#5636A7" />}
                    type="1"
                    link="https://www.linkedin.com/company/wlu-msa/"
                  />
                  <ButtonComponent
                    icon={<FontAwesome6 name="whatsapp" size={20} color="#5636A7" />}
                    type="1"
                    link="https://chat.whatsapp.com/BslJGlMMnAM7TRss3Y1Va0"
                  />
                  <ButtonComponent
                    icon={<Globe size={20} color={"#5636A7"} /> }
                    type="1"
                    link="https://wlumsa.org"
                  />
                
                <ButtonComponent
                    icon={<TvMinimalPlay size={20} color="#5636A7"  /> }
                    type="1"
                    link="https://www.youtube.com/@WLUMSA"
                  />
        
                </View>
               </View>

            </SafeAreaView>
            </DrawerContentScrollView>
          ); 

        }
        }
      >
      <Drawer.Screen name="(tabs)"
          options={{
            headerShown: false,
          }}
         />
    

  
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
