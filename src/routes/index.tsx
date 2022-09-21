import { NavigationContainer } from '@react-navigation/native';
import { ScreenA } from '../screens/screenA';

import { StackRoutes } from './stack.routes'

export function Routes (){
    return (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
    )
}