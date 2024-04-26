import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Icon, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InfoUser from '../components/InfoUser';
import ListAnimauxUser from '../components/listeAnimauxUser';
import { useNavigation } from '@react-navigation/native';


function deconnexion() {

    const url = "https://zabalo.alwaysdata.net/sae401/api/logout";

    const fetchOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    fetch(url, fetchOptions)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Erreur lors de la déconnexion');
            }
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            navigation.navigate('Home', { screen: 'Home' });
            logout();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export default function ProfilView() {

    const navigation = useNavigation();

    const NavigateAjout = () => {
        navigation.navigate("AjoutAnimal");
    };

    

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
    <View style={styles.container}>
            <InfoUser></InfoUser>
           <ListAnimauxUser ></ListAnimauxUser>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={NavigateAjout} style={styles.button}>
                    Ajouter un animal
                </Button>
            </View>
          <Icon
                        name="exit-to-app"
                        size={30}
                        onPress={deconnexion}
                        style={styles.logoutIcon}
                    />
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 8, 
        paddingHorizontal: 14,
        marginTop: '15%',
        
        
        
      },
})