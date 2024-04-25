import React, { useState } from 'react'; 
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'


export default function InscriptionView(props) {
  return (
    <ImageBackground source={{uri: 'https://milhet.alwaysdata.net/sae401/images/BackInscr1.jpg'}} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
    
      <TextInput style={styles.input} mode="outlined" placeholder='Nom' placeholderTextColor="#aaa"></TextInput>
      <TextInput style={styles.input} mode="outlined" placeholder='Prenom' placeholderTextColor="#aaa"></TextInput>
      <TextInput style={styles.input} mode="outlined" placeholder='Adresse Mail' placeholderTextColor="#aaa"></TextInput>
      <TextInput style={styles.input} mode="outlined" placeholder='Téléphone' placeholderTextColor="#aaa"></TextInput>
      <TextInput style={styles.input} mode="outlined" placeholder='Mot de passe' placeholderTextColor="#aaa"></TextInput>
      <TextInput style={styles.input} mode="outlined" placeholder='Confirmer le mot de passe' placeholderTextColor="#aaa"></TextInput>
      <View style={styles.trait}></View>
      <View style={[styles.row ,styles.right]}>
        <Text onPress={ () => props.navigation.navigate("Connexion")} style={styles.cancel}>Annuler</Text>
        <Button type="submit" onPress={ () => props.navigation.navigate("InscriptionSuite")} mode="contained" size="medium" style={styles.register}>Suivant</Button>
      </View>
      
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
        paddingTop: '50%'
    
    
  }, 
  trait: {
    marginTop: 20,
    borderWidth:0.5,
    width: "75%",
  },
  bold: {
    fontWeight: 600,
  },
  title: {
    fontSize: 30,
    marginBottom:20,
    
  },
  icon: { 
    marginLeft: 10, 
  }, 
  input: {
    minWidth: 250,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  right: {
    marginTop:20,
    right: '6%',
  },
  cancel: {
    color: '#84746A',
    borderColor: '#84746A',
    borderWidth: 1,
    padding:10,
    borderRadius: 20,
    marginRight:10,
  },
  register: {
    backgroundColor: '#84746A',
  },
  image:{
    height: '100%',
  },
})