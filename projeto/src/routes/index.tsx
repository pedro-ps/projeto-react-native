import { NavigationContainer } from '@react-navigation/native';
import { ScreenA } from '../screens/screenA';

import { StackRoutes } from './stack.routes'
import { TabRoutes } from './tab.routes'

export function Routes (){
    return (
    <NavigationContainer>
        <TabRoutes />
    </NavigationContainer>
    )
}