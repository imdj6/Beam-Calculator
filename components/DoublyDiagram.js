import { View, Text } from 'react-native'
import React from 'react'


const DoublyDiagram = (props) => {
    return (
        <View className='mt-5'>
            <Text className='text-center font-semibold'>Total 8mm Circles:--{props.total8mm}</Text>
            <Text className='text-center font-semibold'>Total 10mm Circles:--{props.total10mm}</Text>
            <Text className='text-center font-semibold'>Total 12mm Circles:--{props.total12mm}</Text>
            <Text className='text-center font-semibold'>Total 16mm Circles:--{props.total16mm}</Text>
            <Text className='text-center font-semibold'>Total 20mm Circles:--{props.total20mm}</Text>
            <Text className='text-center font-semibold'>Total 25mm circles:--{props.total25mm}</Text>
             {/* <Text className='text-center mt-4'>breadth of the figure:-{props.breadth}</Text> */}
            {/* <Text className='text-center'>depth of the figure:-{props.depth}</Text> */}
                {/* <View className='flex-row mt-3'> */}
                    {/* <View className=''>
                        <Text >{props.depth}</Text>
                    </View> */}
                    {/* <View className={'box-border h-32 w-32 border-4 bg-slate-500 self-center ml-32'}> */}

                    {/* </View> */}
                {/* </View>  */}

        </View>
    )
}

export default DoublyDiagram