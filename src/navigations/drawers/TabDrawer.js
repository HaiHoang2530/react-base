import React from 'react';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
 } from '@react-navigation/drawer';
 import TabBottom from '../bottoms/TabBottom';
 import {Home} from '../../screens'
const Drawer = createDrawerNavigator();
const CustomDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="icon" onPress={()=>alert('hello')}/>
        <DrawerItem label="icon1"  onPress={()=>alert('hello')}/>
        <DrawerItem label="icon2"  onPress={()=>alert('hello')}/>
    </DrawerContentScrollView>
    )
}
 export default function TabDrawer(){
     return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props}/>}>
            <Drawer.Screen name="tabdrawer" component={TabBottom}/>
        </Drawer.Navigator>
     )
 }
