import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import { View ,Text,Button ,TouchableHighlight,Animated} from 'react-native';
import {Home, Setting,Login,SignUp} from '../../screens';
import Drawer from '../drawers/TabDrawer';
import TabBottom from '../bottoms/TabBottom';

const Stack = createStackNavigator();
const config = {
    animation :' spring',
    config:{
        Stiffness: 1000,
        damping: 500,
        mass:3,
        overshootClamping:true,
        restDisplacementThreshold:0.01,
        resSpeedThreshold:0.01,
    },
};
export default function TabStack({navigation}){
    return(
        <Stack.Navigator initialRouteName="signup" >
            <Stack.Screen name="signup" component={SignUp}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name='drawer' component={Drawer} options={{
                
            }} />
        </Stack.Navigator>
    );
};