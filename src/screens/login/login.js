import React,{useRef,useEffect} from 'react';
import { 
    View,
    Text,
    Button,
    Animated,
    Image
} from 'react-native';
import { timing, Easing } from 'react-native-reanimated';

export default function ( {navigation}){
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const spring = useRef(new Animated.Value(0));
    const spri = () =>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:timing,
            easing:Easing.linear,
        })
    }
    const  fadeIn = () =>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:2000,

        }).start();
    }
    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000
        }).start();
      };
    return(
        <View>
            <Animated.View
            style={
                [
                    {
                        opacity:fadeAnim,
                    }
                ]
            }>
                <Text>
                    hello
                </Text>
                <Image style={{height:100,width:100}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLiilrVkOSZNPpdshFSCg2xX3xc4STUz6g2A&usqp=CAU'}}/> 
            </Animated.View>
            <Button title="next"onPress={()=>fadeIn()}/>
            <Button title="back"onPress={()=>fadeOut()}/>
        </View>
    )
}
