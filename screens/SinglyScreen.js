import { View,
    Text,
    Pressable,
    TextInput,
 } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleLeftIcon,PlayIcon } from 'react-native-heroicons/solid';

const SinglyScreen = () => {
  const {
    params: {
        ast,
    },
} = useRoute();
    const navigation=useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Beam Design",
          headerLeft: (props) => (
            <Pressable
              android_ripple={{
                color: "#666666",
                foreground: true,
                borderless: true,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowCircleLeftIcon
                color="white"
                style={{ paddingLeft: 10, marginRight: 28, alignItems: "center" }}
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={25}
              />
            </Pressable>
          ),
          headerRight: (props) => (
            <Pressable
              android_ripple={{
                color: "#666666",
                foreground: true,
                borderless: true,
              }}
              onPress={() => {}}
            >
              <PlayIcon
                color="white"
                style={{ paddingLeft: 10, marginRight: 10, alignItems: "center" }}
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={25}
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: "#0D98BA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
        });
      }, []);


console.log("from singly screen",{ast})
  return (
    <View className='mt-5'>
      <Text className='text-center font-bold text-xl'>This is Singly Reinforced beam</Text>
      <TextInput
      value={ast.ast}
      />
    </View>
  )
}

export default SinglyScreen