import React from 'react'
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function SvgIcon() {

    return (
        <View>
            <Svg 
                height="60%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
            >
                <Path fill="#0099ff" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></Path>
            </Svg>
        </View>
    )

}