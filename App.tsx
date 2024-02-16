import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './pages/Store';
import {NavigationStack} from './pages/NavigationStack';
import { View,Text } from 'react-native';

export const App = () => {
  return (
    // <View><Text>test</Text></View>
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};