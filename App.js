
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CustomerDashboard from './screen/CustomerDashboard';
import UserProfileScreen from './screen/UserProfileScreen';
import LoginScreen from './screen/LoginScreen';
import ServiceByNameScreen from './screen/ServiceByNameScreen';
import store from './store/index'; // Import your store
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For tab icons
import ProviderProfileScreen from './screen/ProviderProfileScreen';
import AddressScreen from './screen/AddressScreen';
import CartScreen from './screen/CartScreen';
import SignupScreen from './screen/SignupScreen';
import HeaderNavigation from './components/HeaderNavigation';
import { ArrowLeftSquare } from 'lucide-react';
import { GlobalStyles } from './components/styles';
import ProviderProfile from './components/ProviderProfile';
import ServiceByIconScreen from './screen/ServiceByIconScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // No headers for tabs
        tabBarActiveTintColor: GlobalStyles.colors.buttonColor,
        tabBarInactiveTintColor: 'black',
        color:GlobalStyles.colors.headerColor
      }}
    >
      <Tab.Screen
        name="Home"
        component={CustomerDashboard}
        options={{
           tabBarIcon: ({ color, size }) => (
             <Ionicons name="home" color={color} size={size} />
           ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Search"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recent Services"
        component={CartScreen}
        options={{
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Your Profile"
        component={UserProfileScreen}
        options={{
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // title: "Sidekick",
          // headerStyle: { backgroundColor: '#f9d66e' },
          // contentStyle: { backgroundColor: 'white' },
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }}  />
            <Stack.Screen name="ServiceByNameScreen" component={ServiceByNameScreen} />
            <Stack.Screen name="ServiceByIconScreen" component={ServiceByIconScreen} />
            <Stack.Screen name="ProviderProfileScreen" component={ProviderProfileScreen} />
            <Stack.Screen name="AddressScreen" component={AddressScreen} />
            <Stack.Screen name="ProviderProfile" component={ProviderProfile}  />
          </>
        ) : (
          <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <AppNavigator />
    </Provider>
  );
}

export default App;
