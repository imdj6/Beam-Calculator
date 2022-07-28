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
  
  
  const [ast1,setAst1]=useState();
  const [astdouble,setAstdouble]=useState();
  const [ast2,setAst2]=useState();
  const [asc,setAsc]=useState();
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
    { label: "M-10", value: 10 },
    { label: "M-15", value: 15 },  
    { label: "M-20", value: 20 },
    { label: "M-25", value: 25 },
    { label: "M-30", value: 30 },
    { label: "M-35", value: 35 },
    { label: "M-40", value:40},
  ]);
  const [items2, setItems2] = useState([
    { label: "Fe-415", value: 415 },
    { label: "Fe-250", value: 250 },
    { label: "Fe-500", value: 500 },
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
    <ScrollView>
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
                setValue={setFck  }
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
                    newText=>setB(parseFloat(newText))
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
                    newText=>setDt(parseFloat(newText))
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
                    newText=>setDc(parseFloat(newText))
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
                  newText=>setD(parseFloat(newText))
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
                      newText=>setM(parseFloat(newText))
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
              onPress={ () => {
                const d=(D)-(dt);
                const mu=1.5*(m);
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
                const mulimit=((0.36*c*(1-(parseFloat(0.42*c)))*fck*b*d*d)/(10**6));
                if(mu<mulimit)
                {
                  console.log("this is singly reinforced section");
                  let c2=((0.5*fck)/fy)*(1-(Math.sqrt(1-((4.6*mu*(10**6))/(fck*b*d*d)))))*(b*d);
                  // let c2=(0.5*fck)/(fy*(1-Math.sqrt(1-((4.6*mu*10^6)/(fck*b*d*d)))));
                   setAst(parseFloat(c2));
                   let ascsingly=0.002*b*D;
                   console.log("homescreen ast",ast);
                   navigation.navigate('singly',{
                    "ast":ast,
                    "ascsingly":ascsingly,
                     "breadth":b,
                     "depth":D,
                   });

                }
                else if(mu>mulimit)
                {
                  console.log("mulimit",mulimit);
                  console.log("this is doubly reinforced section");
                  let c3=((0.5*fck)/fy)*(1-(Math.sqrt(1-((4.6*mulimit*(10**6))/(fck*b*d*d)))))*(b*d);
                  // setAst1((0.5*fck)/(fy*(1-Math.sqrt(1-((4.6*mulimit*10^6)/(fck*b*d*d))))));
                  setAst1(parseFloat(c3));
                  console.log("ast1",ast1);
                  const mu1=mu-mulimit;
                  const dcbyd=(parseFloat(parseFloat(dc)/parseFloat(d)));
                  var fsc=0;
                  if(fy==250)
                  {
                      fsc=parseFloat(217.5);
                  }
                  else if(fy==415)
                  {
                    if(0.05<dcbyd<0.1)
                      {
                        
                        fsc=(parseFloat(355.1))+((((parseFloat(351.9))-(parseFloat(355.1)))/(parseFloat(0.05)))*(dcbyd-0.05));
                      }
                      else if(0.1<dcbyd<0.15)
                      {
                        fsc=(parseFloat(351.9))+((((parseFloat(342.4))-(parseFloat(351.9)))/(parseFloat(0.05)))*(dcbyd-0.1));
                      }
                      else if(0.15<dcbyd<0.20)
                      {
                        fsc=(parseFloat(342.4))+((((parseFloat(329.2))-(parseFloat(342.4)))/(parseFloat(0.05)))*(dcbyd-0.15))
                      }
                      else if(dcbyd==0.05)
                      {
                        fsc=355.1;
                      }
                      else if(dcbyd=0.1)
                      {
                        fsc=351.9;
                      }
                      else if(dcbyd=0.15)
                      {
                        fsc=342.4;
                      }
                      else if(dcbyd=0.20)
                      {
                        fsc=329.2;
                      }
                  }
                  else{
                    if(0.05<dcbyd<0.1)
                      {
                        fsc=(parseFloat(423.9))+((((parseFloat(411.3))-(parseFloat(423.9)))/(parseFloat(0.05)))*(dcbyd-0.05))
                      }
                      else if(0.1<dcbyd<0.15)
                      {
                        fsc=(parseFloat(411.3))+((((parseFloat(395.1))-(parseFloat(411.3)))/(parseFloat(0.05)))*(dcbyd-0.1))
                      }
                      else if(0.15<dcbyd<0.20)
                      {
                        fsc=(parseFloat(395.1))+((((parseFloat(370.3))-(parseFloat(395.1)))/(parseFloat(0.05)))*(dcbyd-0.15))

                      }
                      else if(dcbyd==0.05)
                      {
                        fsc=423.9;
                      }
                      else if(dcbyd=0.1)
                      {
                        fsc=411.3;
                      }
                      else if(dcbyd=0.15)
                      {
                        fsc=395.1;
                      }
                      else if(dcbyd=0.20)
                      {
                        fsc=370.3;
                      }
                      
                  }
                  console.log("fsc",fsc);
                  console.log("Ast1",ast1);
                  const asc=((mu1)*(10**6))/(fsc*(d-dc));
                  const ast2=(fsc*asc)/(0.87*fy);
                  console.log("ast2",ast2);
                  const c4=parseFloat(parseFloat(ast1)+parseFloat(ast2));
                  setAstdouble(c4);
                  console.log(astdouble);
                  console.log('asc is::',asc);
                  console.log(ast2);
                  navigation.navigate("doubly",{
                    "asc":asc,
                    "ast2":ast2,
                    "astfordouble":astdouble,
                    "breadth":b,
                    "depth":D,
                    
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
                              
              }}
            />
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
    </>
  );
};

export default HomeScreen;
