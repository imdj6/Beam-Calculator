import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import SinglyDiagram from './SinglyDiagram'

const SinglyTable = (props) => {


    const [t1,setT1]=useState(0);
    const [t2,setT2]=useState(0);
    const [t3,setT3]=useState(0);
    const [t4,setT4]=useState(0);    
    const [t5,setT5]=useState(0);
    const [t6,setT6]=useState(0);
    const [c1,setC1]=useState(0);
    const [c2,setC2]=useState(0);
    const [c3,setC3]=useState(0);
    const [c4,setC4]=useState(0);
    const [c5,setC5]=useState(0);
    const [c6,setC6]=useState(0);
    function area(d) {
        return (Math.PI*d*d)/4;
    }
    const totalareatension=t1*area(8)+t2*area(10)+t3*area(16)+t4*area(20)+t5*area(25);
    const totalcompressiontension=c1*area(8)+c2*area(10)+c3*area(16)+c4*area(20)+c5*area(25);
    // const totalt1=parseInt(t1)+parseInt(t2)+parseInt(t3)+parseInt(t4)+parseInt(t5);
    // const totalc1=parseInt(c1)+parseInt(c2)+parseInt(c3)+parseInt(c4)+parseInt(c5);
    const total8mm=t1+c1;
    const total10mm=t2+c2;
    const total12mm=t3+c3;
    const total16mm=t4+c4;
    const total20mm=t5+c5;
    const total25mm=t6+c6;
    console.log("totalareatension",totalareatension);

    return (
        <>
        <View className='flex-row space-x-5 mt-4 pl-3'>
            <View>
                <Text >Diameter of Base</Text>
                <View className='mt-5 space-y-4'>
                    <Text className='text-center mb-2'>8mm</Text>
                    <Text className='text-center mb-2'>10mm</Text>
                    <Text className='text-center mb-2'>12mm</Text>
                    <Text className='text-center mb-2'>16mm</Text>
                    <Text className='text-center mb-2'>20mm</Text>
                    <Text className='text-center mb-2'>25mm</Text>
                </View>

            </View>
            <View>
                <Text>Tension Zone</Text>
                <View className='mt-5 space-y-4'>
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t1}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT1(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t2}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT2(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t3}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT3(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t4}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT4(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t5}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT5(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center bg-gray-400 text-white w-20'
                        value={t5}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setT6(parseInt(newText))
                          }
                    />
                </View>
            </View>
            <View>
                <Text>Compression Zone</Text>
                <View className='mt-5 space-y-4'>
                <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c1}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC1(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c2}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC2(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c3}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC3(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c4}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC4(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c5}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC5(parseInt(newText))
                          }
                    />
                    <TextInput
                        className='text-center ml-3 bg-gray-400 text-white w-24'
                        value={c5}
                        placeholder="value"
                        keyboardType="numeric"
                        onChangeText={
                            newText=>setC6(parseInt(newText))
                          }
                    />
                </View>

            </View>
           
        </View>
        <View className='flex-row'>
        <Text className={`mt-5  text-center w-36 ml-16 ${props.ast>totalareatension?"bg-red-600":"bg-green-600"}`}>{totalareatension}</Text>
        <Text className={`mt-5 text-center w-36 ml-6  ${props.ascsingly>totalcompressiontension?"bg-red-600":"bg-green-600"}`}>{totalcompressiontension}</Text>
        </View>
        <SinglyDiagram total8mm={total8mm} total10mm={total10mm} 
        total12mm={total12mm} total16mm={total16mm} total20mm={total20mm}
        total25mm={total25mm} depth={props.depth} breadth={props.breadth}/>
        </>
    )
}

export default SinglyTable

