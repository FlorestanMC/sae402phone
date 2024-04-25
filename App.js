import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'; 
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Start et Connexion
import StartView from './screens/StartView';
import InscriptionView from './screens/InscriptionView';
import InscriptionSuiteView from './screens/InscriptionSuiteView';
import ConnexionView from './screens/ConnexionView';


// User
import ProfilView from './screens/ProfilView';
import MesAnimauxView from './screens/MesAnimauxView';

// Animaux
import AccueilView from './screens/AccueilView';
import AnimalDetail from './components/AnimalDetail';
function AnimalScreen() {

  const StackAnimal = createNativeStackNavigator();
  
  return (
  <StackAnimal.Navigator>
    <StackAnimal.Screen name="Accueil" component={AccueilView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="Detail" component={AnimalDetail} options={{ headerShown: false }}/>
 </StackAnimal.Navigator>
  )

}

function UserScreen() {

  const StackUser = createNativeStackNavigator();
  
  return (
  <StackUser.Navigator>
 <StackUser.Screen name="Profil" component={ProfilView} options={{ headerShown: false }}/>
 <StackUser.Screen name="MesAnimaux" component={MesAnimauxView} options={{ headerShown: false }}/>
 </StackUser.Navigator>
  )

}



export default function App() {
    
    const retrieveData = async () => {
        try {
          const accessToken = await AsyncStorage.getItem('UserToken');
          const user_id = await AsyncStorage.getItem('UserId');
          if (accessToken !== null && user_id !== null) {
            console.log(accessToken, user_id);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
      // Appel de la fonction storeData lors de l'exécution de l'application
      useEffect(() => {
        retrieveData();
      }, []); 

  
      const Tab = createBottomTabNavigator();
      const Stack = createNativeStackNavigator();
      return (
      <NavigationContainer>
        <Stack.Screen name="Start" component={StartView} options={{ headerShown: false }}/>
        <Stack.Screen name="Connexion" component={ConnexionView} options={{ headerShown: false }}/>
        <Stack.Screen name="Inscription" component={InscriptionView} options={{ headerShown: false }}/>
        <Stack.Screen name="InscriptionSuite" component={InscriptionSuiteView} options={{ headerShown: false }}/>
        <Tab.Navigator
        screenOptions={({ }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        
        })
      }
        >
          
        <Tab.Screen
        name="Animaux"
        component={AnimalScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
        <Tab.Screen
        icon=""
        name="Profil"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
        </Tab.Navigator>
      </NavigationContainer>
      );
     }

 
