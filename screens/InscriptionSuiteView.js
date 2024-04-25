import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, TextInput, Text, Card, IconButton, Colors  } from 'react-native-paper'
import React, { useState, useEffect, useRef } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import '../colors.css';


export default function InscriptionSuiteView(props) {

    const [genre, setGenre] = useState('');

  return (
    <ImageBackground source={{uri: 'https://milhet.alwaysdata.net/sae401/images/BackInscr2.jpg'}} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
        <View style={styles.IconButton}  ><Icon name="camera"  size={20} color="white" onPress={ () => console.log("Pressed")} ></Icon></View>
            <TextInput style={styles.input} mode="outlined" placeholder='Ville' placeholderTextColor="#aaa"></TextInput>
            <TextInput style={styles.input} mode="outlined" placeholder='Âge' placeholderTextColor="#aaa"></TextInput>
            
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Card mode="outlined" style={styles.cardgenre} onPress={() => setGenre(0)}>
                            <Card.Content style={styles.genre} >
                                <IconButton icon="human-male" size={40} />
                            </Card.Content>
                        </Card>
                        <Text style={styles.textgenre}>Homme</Text>
                    </View>
                    <View style={styles.column}>
                        <Card mode="outlined" style={styles.cardgenre}>
                            <Card.Content style={styles.genre}>
                                <IconButton icon="human-female" size={40} />
                            </Card.Content>
                        </Card>
                        <Text style={styles.textgenre}>Femme</Text>
                    </View>
                </View>   
            <View style={styles.trait}></View>
            <View style={[styles.row ,styles.right]}>
            <Text onPress={ () => props.navigation.navigate("Inscription")} style={styles.cancel}>Précédent</Text>
                <Button type="submit" onPress={ () => props.navigation.navigate("InscriptionSuite")} mode="contained" size="medium" style={styles.register}>Finaliser l'inscription !</Button>    
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
        paddingTop: '60%'
    
    
  }, 
  photo: {
    backgroundColor: '#84746A',
  },
  trait: {
    marginTop: 20,
    borderWidth:0.3,
    width: "75%",
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
  textgenre: { 
    color: 'black', textAlign: 'center', margin: 5 
  },
  cardgenre:{
    width:90,
    height:100,
    marginHorizontal: 35,
  },
  column: {
    flexDirection: 'column',
  },
  genre: { 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconButton: {
    backgroundColor: '#84746A',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  }
})