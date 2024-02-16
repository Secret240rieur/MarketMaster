import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigator';
import {LoginPage} from './Account/LoginPage';
import {SignupPage} from './Account/SignupPage';
import {AccountSettings} from './Account/AccountSettings';
import {ProfilPage} from './Account/ProfilPage';
import {CityScreen} from './Publish/CityScreen';
import {AdPage} from './Annonce/AdPage';
import {ChatPage} from './Chat/ChatPage';
import {useSelector} from 'react-redux';
import {RootState} from './Store';
import {EditAd} from './Annonce/EditAd';
import {CategoriesScreen} from './Publish/CategoriesScreen';
import {AccountPage} from './Account/AccountPage';
import {ChangePassword} from './Account/ChangePassword';
import React from 'react';

const Stack = createStackNavigator();

export const NavigationStack = () => {
  const uid = useSelector((state: RootState) => state.info.uid);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{title:'TabNavigator'}}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{title:'LoginPage'}}/>
      <Stack.Screen name="SignupPage" component={SignupPage} options={{title:'SignupPage'}}/>
      <Stack.Screen name="AccountSettings" component={AccountSettings} options={{title:'AccountSettings'}}/>
      <Stack.Screen name="ProfilPage" component={ProfilPage} options={{title:'ProfilPage'}}/>
      <Stack.Screen name="Cities" component={CityScreen} options={{title:'Cities'}}/>
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{title:'Categories'}}/>
      <Stack.Screen name="AdPage" component={AdPage} options={{title:'AdPage'}}/>
      <Stack.Screen name="EditAd" component={EditAd} options={{title:'EditAd'}}/>
      <Stack.Screen name="AccountPage" component={AccountPage} options={{title:'AccountPage'}}/>
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title:'ChangePassword'}}/>
      <Stack.Screen name="ChatPage" component={uid ? ChatPage : LoginPage} options={{title:'ChatPage'}}/>
    </Stack.Navigator>
  );
};
