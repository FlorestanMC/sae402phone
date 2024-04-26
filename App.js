import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'; 
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


// Start et Connexion
import StartView from './screens/StartView';
import InscriptionView from './screens/InscriptionView';
import InscriptionSuiteView from './screens/InscriptionSuiteView';
import ConnexionView from './screens/ConnexionView';


// User
import ProfilView from './screens/ProfilView';
import MesAnimauxView from './components/listeAnimauxUser';
import MonEspaceView from './screens/MonEspace';
import ModifierAnimal from './screens/ModifierAnimal';
import ModifierUtilisateur from './screens/ModifierUtilisateur';
import AjouterAnimal from './screens/AjoutAnimalView';

// Animaux
import AccueilView from './screens/AccueilView';
import AnimalDetail from './components/AnimalDetail';

// Chat
import AllConversationsView from './screens/AllConversationsView';
import ConversationView from './screens/ConversationView';

function AnimalScreen() {

  const StackAnimal = createNativeStackNavigator();
  const [accessToken, setAccessToken] = useState("");
  const retrieveData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('UserToken');
      const user_id = await AsyncStorage.getItem('UserId');
      console.log(accessToken)
      if (accessToken && user_id !== null) {
        setAccessToken(accessToken)
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
  <StackAnimal.Navigator>
    {accessToken ? (
        <>
    <StackAnimal.Screen name="Accueil" component={AccueilView} options={{ headerShown: false }}/>
      <StackAnimal.Screen name="Detail" component={AnimalDetail} options={{ headerShown: false }}/>
    </>
     ) : (
      <>
      <StackAnimal.Screen name="Start" component={StartView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="Connexion" component={ConnexionView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="Inscription" component={InscriptionView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="InscriptionSuite" component={InscriptionSuiteView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="Accueil" component={AccueilView} options={{ headerShown: false }}/>
    <StackAnimal.Screen name="Detail" component={AnimalDetail} options={{ headerShown: false }}/>
      
      </>

  )} 
    
 </StackAnimal.Navigator>
  )

}

function UserScreen() {

  const StackUser = createNativeStackNavigator();
  
  return (
  <StackUser.Navigator>
 <StackUser.Screen name="Profil" component={ProfilView} options={{ headerShown: false }}/>
 <StackUser.Screen name="MesAnimaux" component={MesAnimauxView} options={{ headerShown: false }}/>
 <StackUser.Screen name="MonEspaceView" component={MonEspaceView} options={{ headerShown: false }}/>
 <StackUser.Screen name="ModifierAnimal" component={ModifierAnimal} options={{ headerShown: false }}/>  
 <StackUser.Screen name="ModifierUtilisateur" component={ModifierUtilisateur} options={{ headerShown: false }}/>  
 <StackUser.Screen name="AjoutAnimal" component={AjouterAnimal} options={{ headerShown: false }}/>  
 </StackUser.Navigator>
  )

}

function ChatScreen() {

  const StackChat = createNativeStackNavigator();
  
  return (
  <StackChat.Navigator>
    <StackChat.Screen name="AllConversations" component={AllConversationsView} options={{ headerShown: false }}/>
    <StackChat.Screen name="Conversation" component={ConversationView} options={{ headerShown: false }}/>  
 </StackChat.Navigator>
  )

}

export default function App() {
    
  const [accessToken, setAccessToken] = useState("");
  const retrieveData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('UserToken');
      const user_id = await AsyncStorage.getItem('UserId');
      console.log(accessToken)
      if (accessToken && user_id !== null) {
        setAccessToken(accessToken)
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
      return (
      <NavigationContainer>
    {accessToken ? (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
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

              <Tab.Screen
                    icon=""
                    name="Messages"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="chatbubbles-outline" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    ) : (
        <>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
      })}>
        <Tab.Screen
                    name="Animaux"
                    component={AnimalScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home" size={24} color={color} />
                        ),
                    }}
                />
                </Tab.Navigator>
        </>

    )} 
</NavigationContainer >
      );
     }

 
