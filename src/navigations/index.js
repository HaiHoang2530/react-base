import React from 'react';
import TabStack from './stacks/TabStack';
import { 
    NavigationContainer
} from '@react-navigation/native';
import Drawer from './drawers/TabDrawer';
export default function Nav(){
    return(
        <NavigationContainer>
            <TabStack/>
        </NavigationContainer>
    )
}