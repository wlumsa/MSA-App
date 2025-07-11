import React, { useEffect } from "react";
import {
  StatusBar,
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import MSA_Logo from "../assets/images/MSA_Logo.png";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  MessageCircle,
  Globe,
  Banknote,
  CircleUser,
  Pencil,
  House,
  Link,
  MapPin,
  ChevronRight,
  TvMinimalPlay,
  AlignJustify,
  AlignStartHorizontal,
  Clock3,
} from "lucide-react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ButtonComponent } from "./components/ButtonComponent/ButtonComponent";
import { Drawer } from "expo-router/drawer";
import ScreenButtonComponent from "./components/ScreenButtonComponent/ScreenButtonComponent";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { useColorScheme } from "nativewind";
import {
  scheduleAllPrayerNotifications,
  arePrayerNotificationsEnabled,
} from "@/Utils/prayerNotifications";

const queryClient = new QueryClient();

export default function RootLayout() {
  useReactQueryDevTools(queryClient);
  const colorScheme = useColorScheme();
  const iconColor = colorScheme.colorScheme === "dark" ? "#9055FF" : "#5636A7";

  // Initialize prayer notifications on app start (non-blocking)
  useEffect(() => {
    const initializeNotifications = async () => {
      try {
        console.log("Checking notification permissions...");
        const enabled = await arePrayerNotificationsEnabled();
        if (enabled) {
          console.log("Permissions granted, but skipping auto-scheduling for now");
          // Temporarily disabled auto-scheduling to improve app load time
          // Users can manually schedule notifications from the Prayer Times screen
        } else {
          console.log("Notification permissions not granted");
        }
      } catch (error) {
        console.log("Error checking notification permissions:", error);
      }
    };

    // Delay initialization to let app load first
    const timer = setTimeout(initializeNotifications, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor="#F8F5FF" barStyle="dark-content" />
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "" }}>
          <Drawer
            screenOptions={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <AlignJustify
                    size={24}
                    color={iconColor}
                    style={{ marginLeft: 30 }}
                    strokeWidth={2.5}
                  />
                </TouchableOpacity>
              ),
              drawerHideStatusBarOnOpen: true,
              drawerType: "front",
              drawerStyle: {
                backgroundColor:
                  colorScheme.colorScheme === "dark" ? "#191818" : "#F8F5FF",
                width: "80%",
              },
            })}
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <SafeAreaView>
                    <View className="flex flex-row   w-full px-4 pb-6 ">
                      <View className="flex flex-row items-center gap-4">
                        <Image
                          source={MSA_Logo}
                          style={{ width: 50, height: 50 }}
                        />
                        <Text className="text-4xl font-bold text-primary pb-2 flex items-start justify-center ">
                          WLU MSA
                        </Text>
                      </View>
                      <Pressable
                        onPress={props.navigation.closeDrawer}
                      ></Pressable>
                    </View>

                    <View className="flex flex-col    px-4 py-2 rounded-lg my-3 w-full bg-foreground  shadow-md shadow-slate-200 ">
                      <ScreenButtonComponent
                        icon={<House size={20} color={iconColor} />}
                        screenName=""
                        text="Home"
                        navigation={props.navigation}
                        state={props.state}
                      />
                      <ScreenButtonComponent
                        icon={<Clock3 size={20} color={iconColor} />}
                        screenName="/prayertimes"
                        text="Prayer Timings"
                        navigation={props.navigation}
                        state={props.state}
                      />
                      <ScreenButtonComponent
                        icon={<Link size={20} color={iconColor} />}
                        screenName="/events"
                        text="Events"
                        navigation={props.navigation}
                        state={props.state}
                      />
                      <ScreenButtonComponent
                        icon={<MapPin size={20} color={iconColor} />}
                        screenName="/halalfood"
                        text="Halal Food Directory"
                        navigation={props.navigation}
                        state={props.state}
                        lastItem={true}
                      />
                    </View>
                    <View>
                      <Text className="text-sm  text-gray-500 dark:text-gray-300 p-4 ">
                        Quick Links
                      </Text>
                      <View className="bg-foreground  px-4 py-2 rounded-lg my-3   shadow-md shadow-slate-200 ">
                        <ButtonComponent
                          icon={<Pencil size={20} color={iconColor} />}
                          link="https://www.wlumsa.org/contact"
                          text="Feedback Form"
                          type="2"
                        />
                        <ButtonComponent
                          icon={<CircleUser size={20} color={iconColor} />}
                          link="https://www.wlumsa.org/contact"
                          text="Become a General Member"
                          type="2"
                        />

                        <ButtonComponent
                          icon={<Banknote size={20} color={iconColor} />}
                          link="https://www.wlumsa.org/contact"
                          text="Donate to the MSA"
                          type="2"
                        />
                        <ButtonComponent
                          icon={<MessageCircle size={20} color={iconColor} />}
                          link="https://www.wlumsa.org/contact"
                          text="Contact Us"
                          type="2"
                          lastItem={true}
                        />
                      </View>
                    </View>

                    <View>
                      {/* Socials */}
                      <Text className="text-sm  text-gray-500 dark:text-gray-300 p-4 ">
                        Connect with us
                      </Text>
                      <View className="  gap-10 items-center  justify-center p-4 rounded-xl  w-full flex flex-row flex-wrap ">
                        <ButtonComponent
                          icon={
                            <FontAwesome6
                              name="instagram"
                              size={20}
                              color={iconColor}
                            />
                          }
                          type="1"
                          link="https://www.instagram.com/wlumsa/"
                        />

                        <ButtonComponent
                          icon={
                            <FontAwesome6
                              name="facebook"
                              size={20}
                              color={iconColor}
                            />
                          }
                          type="1"
                          link="https://www.facebook.com/wlumsa/"
                        />

                        <ButtonComponent
                          icon={
                            <FontAwesome6
                              name="linkedin"
                              size={20}
                              color={iconColor}
                            />
                          }
                          type="1"
                          link="https://www.linkedin.com/company/wlu-msa/"
                        />
                        <ButtonComponent
                          icon={
                            <FontAwesome6
                              name="whatsapp"
                              size={20}
                              color={iconColor}
                            />
                          }
                          type="1"
                          link="https://chat.whatsapp.com/BslJGlMMnAM7TRss3Y1Va0"
                        />
                        <ButtonComponent
                          icon={<Globe size={20} color={iconColor} />}
                          type="1"
                          link="https://wlumsa.org"
                        />

                        <ButtonComponent
                          icon={<TvMinimalPlay size={20} color={iconColor} />}
                          type="1"
                          link="https://www.youtube.com/@WLUMSA"
                        />
                      </View>
                    </View>
                  </SafeAreaView>
                </DrawerContentScrollView>
              );
            }}
          >
            <Drawer.Screen
              name="(tabs)"
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
      </QueryClientProvider>
    </>
  );
}
