import React,{useRef} from 'react';
import {
    View,
    Text,
    Button,
    Animated,
    PanResponder,
    StyleSheet,
    Image,
} from 'react-native';

export default function SignUp({navigation}){
    // const  pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = PanResponder.create({
    //     onPanResponderMove:Animated.event([
    //         null,
    //         {
    //             dx:pan.x,
    //             dy:pan.y,

    //         }
    //     ]),
    //     onPanResponderRelease:()=>{
    //         Animated.spring(
    //             pan,
    //             {
    //                 toValue:{x:2,y:1}
    //             }
    //         ).start();

    //     },
    // });
//++++++++++++++++++++++++++++++++++++++++++++++++++Animatied decay()++++++++++++++++++++++++++++++++++++++++++++++
    const animatedValue = new Animated.ValueXY();
    Animated.decay(animatedValue,{
        velocity:{
            
        },
        deceleration:0.997,
    })
    return(
        <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
        <Button title="next" onPress={()=>navigation.navigate('login')}/>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      backgroundColor: "#61dafb",
      width: 100,
      height: 80,
      borderRadius: 4,
    },
  });