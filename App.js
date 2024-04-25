import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'; 
import { Provider as PaperProvider } from 'react-native-paper';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

// Start et Connexion
import StartView from './screens/StartView';

import InscriptionView from './screens/InscriptionView';
import InscriptionSuiteView from './screens/InscriptionSuiteView';
import ConnexionView from './screens/ConnexionView';

// Accueil
import AccueilView from './screens/AccueilView';


const Stack = createNativeStackNavigator();

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

 return (
 <PaperProvider>
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Start" component={StartView} options={{ headerShown: false }}/>
 <Stack.Screen name="Accueil" component={AccueilView} options={{ headerShown: false }}/>
 <Stack.Screen name="Connexion" component={ConnexionView} options={{ headerShown: false }}/>
 <Stack.Screen name="Inscription" component={InscriptionView} options={{ headerShown: false }}/>
 <Stack.Screen name="InscriptionSuite" component={InscriptionSuiteView} options={{ headerShown: false }}/>
 </Stack.Navigator>
 </NavigationContainer>
 </PaperProvider>   
 ); 

}