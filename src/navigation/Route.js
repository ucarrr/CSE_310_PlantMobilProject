import React from 'react'
import SignUp from '../pages/SignUp'
import LoginScreen from '../pages/Login';
import SignUpForm from '../pages/SignUpForm';
import SettingPage from '../pages/SettingPage'
import AccountPage from '../pages/AccountPage'
import ListScreen from '../pages/ListScreen';
import ModalScreen from '../pages/ModalScreen';
import HomeScreen from '../pages/HomeScreen';
import ForgatPasswordPage from '../pages/ForgatPassword'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: '#3366ff',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}

                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}

            />
            <Tab.Screen name="Settings" component={SettingPage}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="key" color={color} size={size} />
                    ),


                }}
            />
            <Tab.Screen name="Account" component={AccountPage}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}

            />
             <Tab.Screen name="ListScreen" component={ListScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'List',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}

            />
          
        </Tab.Navigator>
    );
}


const Stack = createNativeStackNavigator();

function Route() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="LoginScreen"
             
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="SignUp" component={SignUp}

                />
                 <Stack.Screen name="SignUpForm" component={SignUpForm}

/>
                <Stack.Screen name="HomeScreen" component={MyTabs}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen name="ForgatPasswordPage" component={ForgatPasswordPage}
                  
                />
                 <Stack.Screen name="ModalScreen" component={ModalScreen}
                  
                  />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Route
