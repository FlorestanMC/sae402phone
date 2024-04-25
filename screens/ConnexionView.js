 import React, { useState, useEffect } from 'react'; 
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import User from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (data) => {
  try {
      const accessToken = data.accessToken.substring(3); // Supprime les 3 premiers caractères
      const userId = data.user_id.toString(); // Assurez-vous que user_id est une chaîne de caractères ou un type pouvant être transformé en chaîne de caractères
      await AsyncStorage.setItem('UserToken', accessToken);
      await AsyncStorage.setItem('UserId', userId);
  } catch (error) {
      // Gestion des erreurs lors de la sauvegarde des données
      console.error('Erreur lors de la sauvegarde des données:', error);
  }
};

export default function ConnexionView(props) {

  const url = `https://milhet.alwaysdata.net/sae401/api/login`

  
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  // State variable to track password visibility 
  const [showPassword, setShowPassword] = useState(false); 

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleLogin = () => {
    if (email !== '' && password !== ''){
      let u = new User(email, password);
      getUtilisateur(u);
    }
  }

  useEffect(() => {
      getUtilisateur();
    }
  , []);

  let body = {
    email: email,
    password: password
  }
    // Function to toggle the password visibility state 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

    


  function getUtilisateur() {
      const fetchOptions = {
          method: "POST",
          headers: {
              'Content-Type': 'application/jsons',
          },
          body: JSON.stringify(body)
      };
      fetch(url, fetchOptions)
          .then((response) => {
              return response.json();
          })
          .then((dataJSON) => {
              console.log(dataJSON);
              if (dataJSON.status == 1) {
                  storeData({ accessToken: dataJSON.accessToken, user_id: dataJSON.user_id })
                  console.log(storeData)
                  props.navigation.navigate('Accueil')
              }
              return "Problème de connexion"
          })
          .catch((error) => {
              console.log(error);
          });
  }

  return (
    
    <ImageBackground source={{uri: 'https://milhet.alwaysdata.net/sae401/images/backCo.jpg'}} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
    
      
      <TextInput 
      style={styles.input} 
      value={email}
      mode="outlined" 
      placeholder='Mail' 
      onChangeText={handleEmailChange} 
      placeholderTextColor="#aaa">
      </TextInput>
      <TextInput 
  
                    // Bricolage pour que le mot de passe s'affiche ou non utilisation d'un mélange entre un article provenant du github de Paper ainsi que d'un article sur geeksforgeeks
                    // https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-react-native/
                    // https://callstack.github.io/react-native-paper/4.0/text-input-icon.html
                    secureTextEntry={!showPassword} 
                    right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} />}
                    value={password} 
                    mode="outlined"
                    onChangeText={handlePasswordChange} 
                    style={styles.input} 
                    placeholder="Mot de passe"
                    placeholderTextColor="#aaa"
                    
                /> 
      <Text style={styles.marginB}>Pas encore de compte ? <Text style={styles.bold} onPress={ () => props.navigation.navigate("Inscription")}> Créez le ici </Text></Text>
      <Button mode="contained" onPress={handleLogin} style={styles.connect}>Se connecter</Button>
      
    </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  
container: { 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center',
  borderRadius: 8, 
  paddingHorizontal: 14, 
  height: '100%',
  paddingTop: '70%'
  
}, 
bold: {
  fontWeight: 600,
},
title: {
  fontSize: 30,
  marginBottom:200,
  
},
icon: { 
  marginLeft: 10, 
}, 
input: {
  minWidth: 200,
  marginBottom: 20,
},
marginB: {
  marginBottom:20,
},
image:{
  height: '100%',
},
connect:{
  backgroundColor: '#84746A',
}
 })