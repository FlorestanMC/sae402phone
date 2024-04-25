import { StyleSheet, View, ImageBackground} from 'react-native'
import React from 'react'

import { Button, Title,
  Text  } from 'react-native-paper';

 
  
export default function StartView(props) {
  return (
    <ImageBackground source={{uri: 'https://milhet.alwaysdata.net/sae401/images/BackStart.jpg'}} resizeMode="cover" style={styles.image}>

    <View style={styles.container}>
      <Text style={styles.primarytext} > Une chance pour chacun </Text>
      <Text style={styles.secondtext}>Vous recherchez un compagnon de vie ? </Text>
      <Text style={styles.secondtext}>Vous êtes au bon endroit ! </Text>
      <Button icon="account" mode="contained"  style={styles.mt} onPress={ () => props.navigation.navigate("Connexion")}>Connexion</Button>
      <Button icon="account-off" mode="contained" style={styles.mt} onPress={ () => props.navigation.navigate("Accueil")}>Commencer sans être connecté</Button>

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
    paddingTop: '140%',
    
  },
  secondtext: {
    
    fontSize: 12,
    fontWeight: '200'
  },
  primarytext: {
    marginBottom:15,
    fontSize: 22,
    fontWeight: 'bold'
  },
  mt: {
    marginTop:15,
    backgroundColor: '#84746A',
  },
  bold: {
    fontWeight:'bold',
  },
  image:{
    height: '100%',
  },
})