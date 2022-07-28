import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleLeftIcon, PlayIcon } from 'react-native-heroicons/solid';
import SinglyTable from '../components/SinglyTable';



const SinglyScreen = ({route}) => {
 const {ast}=route.params;
 const {ascsingly}=route.params;
 const {breadth}=route.params;
 const {depth}=route.params;

  const navigation = useNavigation();
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
          onPress={() => { }}
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
  return (
    <>
    <ScrollView>
    <View className='mt-5'>
      <Text className='text-center font-bold text-xl'>Reinforcement detailing</Text>
      <Text className='mt-3 text-center font-semibold text-lg'>This is singly reinforced Beam</Text>
      <Text className='mt-3 text-center text-base font-semibold'>The value of Ast is:-( {ast})</Text>
      <Text className='mt-3 text-center text-base font-semibold'>The value of Asc is:-( {ascsingly})</Text>
      <View>
       <SinglyTable ast={ast} ascsingly={ascsingly} breadth={breadth} depth={depth}/>
      </View>
    </View>
    </ScrollView>
    </>
    
  )
}

export default SinglyScreen