import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MenuIcon, PlayIcon } from "react-native-heroicons/solid";
import DropDownPicker from "react-native-dropdown-picker";

const HomeScreen = () => {
  
  
 



  const [m,setM]=useState();
  const [dc,setDc]=useState();
  const [dt,setDt]=useState();
  const [D,setD]=useState();
  const [b,setB]=useState();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [fck, setFck] = useState(null);
  const [fy, setFy] = useState(null);
  const [ast,setAst]=useState();
  const [items1, setItems1] = useState([
    { label: "M-10", value: "10" },
    { label: "M-15", value: "15" },  
    { label: "M-20", value: "20" },
    { label: "M-25", value: "25" },
    { label: "M-30", value: "30" },
    { label: "M-35", value: "35" },
    { label: "M-40", value: "40" },
  ]);
  const [items2, setItems2] = useState([
    { label: "Fe-415", value: "415" },
    { label: "Fe-250", value: "250" },
    { label: "Fe-500", value: "500" },
  ]);
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
          onPress={() => {}}
        >
          <MenuIcon
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

  return (
    <>
     <View style={{
     }}>
      <View className="mt-3 ml-4 ">
        <View>
          <Text className="text-blue-500 font-bold text-lg mb-3">
            Material Properties
          </Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-base">Grade of concrete</Text>
            <View>
              <DropDownPicker
                className="w-36 h-10 ml-20 z-50"
                placeholder="choose correct"
                open={open1}
                value={fck}
                items={items1}
                setOpen={setOpen1}
                setValue={setFck}
                setItems={setItems1}
              />
            </View>
          </View>

          <View className="flex-row items-center mt-10">
            <Text className="font-bold text-base mr-6">Grade of steel </Text>
            <View>
              <DropDownPicker
                className="w-36 h-10 ml-20"
                placeholder="choose correct"
                open={open2}
                value={fy}
                items={items2}
                setOpen={setOpen2}
                setValue={setFy}
                setItems={setItems2}
              />
            </View>
          </View>
          <View
            className="mt-10"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
        </View>

        <View className="mt-3 ml-2">
          <View>
            <Text className="text-blue-500 font-bold text-lg mb-3">
              Section Properties
            </Text>
            <View className="flex-row items-center">
              <Text className="font-bold text-base flex-1">Width of beam</Text>
              <View className="mr-12">
                <TextInput
                  style={{
                    width: 100,
                    borderWidth: 1,
                    padding: 5,
                  }}
                  placeholder="in mm"
                  keyboardType="numeric"
                  onChangeText={
                    newText=>setB(newText)
                  }
                />
              </View>
            </View>

            <View className="flex-row items-center mt-5">
              <Text className="font-bold text-base flex-1">Tension Cover</Text>
              <View className="mr-12">
                <TextInput
                  style={{
                    width: 100,
                    borderWidth: 1,
                    padding: 5,
                  }}
                  placeholder="in mm"
                  keyboardType="numeric"
                  onChangeText={
                    newText=>setDt(newText)
                  }
                />
              </View>
            </View>
            <View className="flex-row items-center mt-5">
              <Text className="font-bold text-base flex-1">
                Compression Cover
              </Text>
              <View className="mr-12">
                <TextInput
                  style={{
                    width: 100,
                    borderWidth: 1,
                    padding: 5,
                  }}
                  placeholder="in mm"
                  keyboardType="numeric"
                  onChangeText={
                    newText=>setDc(newText)
                  }
                />
              </View>
            </View>
          </View>

          <View className="flex-row items-center mt-5">
            <Text className="font-bold text-base flex-1">Depth of beam</Text>
            <View className="mr-12">
              <TextInput
                style={{
                  width: 100,
                  borderWidth: 1,
                  padding: 5,
                }}
                placeholder="in mm"
                keyboardType="numeric"
                onChangeText={
                  newText=>setD(newText)
                }
              />
            </View>
          </View>
        </View>
        <View
          className="mt-10"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        <View>
          <View className="mt-3 ml-2">
            <View>
              <Text className="text-blue-500 font-bold text-lg mb-3">
                Input Forces
              </Text>
              <View className="flex-row items-center">
                <Text className="font-bold text-base flex-1">Moment</Text>
                <View className="mr-12">
                  <TextInput
                    style={{
                      width: 100,
                      borderWidth: 1,
                      padding: 5,
                    }}
                    placeholder="in kNm"
                    keyboardType="numeric"
                    onChangeText={
                      newText=>setM(newText)
                    }
                  />
                </View>
              </View>

              <View
                className="mt-10"
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "black" }}
                />
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "black" }}
                />
              </View>
            </View>
          </View>

          <View className="items-center mt-10">
            <Button
              title="Submit"
              color="#0D98BA"
              onPress={async () => {
                const d=D-dt;
                const mu=1.5*m;
                var c=0;
                if(fy==250)
                {
                  c=0.53;
                }
                else if(fy==415)
                {
                  c=0.48;
                }
                else{
                  c=0.46
                }
                const mulimit=0.36*c*((1-0.42)*c)*fck*b*d*d;
                var ast1=0;
                var mu1=0;
                var fsc=0;
                var dcbyd=0;
                if(mu<mulimit)
                {
                  console.log("this is singly reinforced section");
                  let c2=(0.45*fck)/fy*(1-Math.sqrt(1-((4.6*mu*10^6)/(fck*b*d*d))));
                   setAst(c2);
                   console.log("homescreen ast",ast);
                   navigation.navigate('singly',{
                    ast:{ast},
                   });

                }
                else if(mu>mulimit)
                {
                  console.log("this is doubly reinforced section");
                  ast1=(0.45*fck)/fy*(1-Math.sqrt(1-((4.6*mulimit*10^6)/(fck*b*d*d))));
                  mu1=mu-mulimit;
                  dcbyd=dc/d;
                  if(fy==250)
                  {
                      if(0.04<dcbyd<0.06)
                      {
                        fsc=217.5;
                      }
                      else if(0.09<dcbyd<0.15)
                      {
                        fsc=217.5;
                      }
                      else if(0.10<dcbyd<0.15)
                      {
                        fsc=217.5;
                      }
                      else if(0.18<dcbyd<0.25)
                      {
                        fsc=217.5;
                      }
                  }
                  else if(fy==415)
                  {
                    if(0.04<dcbyd<0.06)
                      {
                        fsc=355.1;
                      }
                      else if(0.09<dcbyd<0.15)
                      {
                        fsc=351.9;
                      }
                      else if(0.10<dcbyd<0.15)
                      {
                        fsc=342.4;
                      }
                      else if(0.18<dcbyd<0.25)
                      {
                        fsc=329.2;
                      }
                  }
                  else{
                    if(0.04<dcbyd<0.06)
                      {
                        fsc=423.9;
                      }
                      else if(0.09<dcbyd<0.15)
                      {
                        fsc=411.3;
                      }
                      else if(0.10<dcbyd<0.15)
                      {
                        fsc=395.1;
                      }
                      else if(0.18<dcbyd<0.25)
                      {
                        fsc=370.3;
                      }
                  }
                  const asc=(mu1)/(fsc*(d-dc));
                  const ast2=(fsc*asc)/(0.87*fy);
                  const astfordoub=ast1+ast2;
                  navigation.navigate("doubly",{
                    ast
                  })
                }
                console.log("width",b);
                console.log("Depth",D);
                console.log("GradeConc",fck);
                console.log("Gradeste",fy);
                console.log("Tension",dt);
                console.log("Compression",dc);
                console.log("Moment",m);
                console.log("d",d);
                console.log(
                  "mu",mu
                )
                console.log("c",c);
                console.log("mul",mulimit);
                console.log(ast);
                console.log(ast1);
              }}
            />
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

export default HomeScreen;
