import { StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

import { Subscription } from "expo-modules-core";

import "./src/services/notificationConfig";
import { getPushNotificationToken } from "./src/services//getPushNotificationToken";
import { useEffect, useRef } from "react";

export default function App() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fonstLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
