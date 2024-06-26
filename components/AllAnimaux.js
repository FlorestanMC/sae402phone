import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card, IconButton, Title, Paragraph } from "react-native-paper";

export default function AffichListAnimaux(props) {

    let url = "https://milhet.alwaysdata.net/sae401/api/animaux"
    
    const searchAnimal = props &&props.searchQuery ? props.searchQuery : null;
    const [listeAnimaux, setAnimaux] = useState([]);    
    const [iconStates, setIconStates] = useState([]);
  
    if (searchAnimal) {
      url += `?animaux=${searchAnimal}`;
    }
    
    useEffect(() => {
      getAnimaux();
      }, 
      [props.searchQuery]);

function getAnimaux() {
    const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {   
          const initialIconStates = Array(dataJSON.length).fill('heart-outline'); 
            setIconStates(initialIconStates);      
            setAnimaux(dataJSON);
            
        })
        .catch((error) => {
            console.log(error);
        });

        
}
  


  // Fonction pour gérer le clic sur l'icône d'une card propre
  const handleIconPress = (index) => {
    // Créer une copie de l'état actuel des icônes
    const newIconStates = [...iconStates];
    // Changer l'icône de la carte spécifique
    newIconStates[index] = iconStates[index] === 'heart-outline' ? 'heart' : 'heart-outline';
    // Mettre à jour l'état des icônes avec la nouvelle valeur
    setIconStates(newIconStates);
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      {listeAnimaux.map((animal, index) => (
        <Card key={animal.ID_ANIMAL} style={styles.card} onPress={ ()=> props.navigation.navigate("Detail", {idAnimal:animal.ID_ANIMAL})}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.header}>
              <Title style={styles.title}>{animal.PRENOM}</Title>
              <IconButton icon={animal.GENRE === 0 ? "gender-male" : "gender-female"} />
              <IconButton
              icon={iconStates[index]} // Utiliser l'état correspondant à la carte actuelle
              color="#FF5733"
              size={30}
              onPress={() => handleIconPress(index)} // Passer l'index de la carte à la fonction de gestion du clic
              />
            </View>
            <Image
              source={{ uri: `https://milhet.alwaysdata.net/sae401/images/${animal.PHOTO}` }}
              style={styles.image}
            />
            <Paragraph style={styles.description}>
              {animal.RACE}, {animal.AGE} {animal.AGE <= 1 ? "an" : "ans"}
            </Paragraph>
            <Paragraph style={styles.description}>{animal.LOCALISATION}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  card: {
    marginBottom: 16,
    width:300
  },
  cardContent: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 8,
  },
  description: {
    fontStyle: "italic",
    marginBottom: 8,
  },
});