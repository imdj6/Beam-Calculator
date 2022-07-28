import { View, Text,Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { PlayIcon,ArrowCircleLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import DoublyTable from '../components/DoublyTable'

const DoublyScreen = ({route}) => {
  const {asc}=route.params;
  const {ast2}=route.params;
  const {astfordouble}=route.params;
  const {breadth}=route.params;
  const {depth}=route.params;

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

console.log(asc,ast2,astfordouble)

  return (
    <>
    <ScrollView>

      <View>
        <Text className="mt-5 text-center text-xl font-extrabold">Reinforcement detailing</Text>
        <Text className="text-center mt-4 text-gray-900 text-lg font-semibold">This is Doubly Reinforced Beam</Text>
        <Text className='text-center mt-2 font-semibold text-base'>Asc Value is:-({asc})</Text>
        <Text className='text-center mt-2 font-semibold text-base'>Ast2 Value is:-({ast2})</Text>
        <Text className='text-center mt-2 font-semibold text-base'>Ast Value is:-({astfordouble})</Text>
        <DoublyTable asc={asc} astfordouble={astfordouble} breadth={breadth} depth={depth}/>
  
  
      </View>
    
    </ScrollView>
    </>
  )
}

export default DoublyScreen