import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList} from "react-native";
import { Card, } from "react-native-paper";


export default function AffichType() {

  const colorselected = ['#70B4B4', '#F8B1DD', '#FFB780', '#49A2C9', '#49A2C9']; // Liste de couleurs
  const colorunselected = ['#70B4B4', '#FFD8ED', '#FFDCC4', '#BDEFCC', '#C7E7FF']; // Liste de couleurs

  const url = "https://milhet.alwaysdata.net/sae401/api/types";
  let all = 5;
  const [listeType, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = () => {
      const fetchOptions = { method: "GET" };
      fetch(url, fetchOptions)
        .then((response) => response.json())
        .then((dataJSON) => setTypes(dataJSON))
        .catch((error) => console.log(error));
    };

    fetchTypes();
  }, [url]);

  return (
    <View style={styles.container}>
     

     

        <FlatList
  horizontal
  data={[{ id: 'special', type: 'special' }, ...listeType]}
  renderItem={({ item, index }) => (
    <View style={styles.types}>
      {item.type === 'special' && (
        <Card style={styles.specialCard}>
          <Card.Content style={styles.cardContent}>
            <Image
              style={styles.cardImage}
              source={{ uri: "https://milhet.alwaysdata.net/sae401/images/all.png" }}
            />
          </Card.Content>
        </Card>
      )}
      {item.type !== 'special' && (
        <Card style={[styles.card, { backgroundColor: colorunselected[index % colorunselected.length] }]} onPress>
          <Card.Content style={styles.cardContent} >
            <Image
              style={styles.cardImage}
              source={{ uri: "https://milhet.alwaysdata.net/sae401/images/" + item.ICON }}
            />
          </Card.Content>
        </Card>
      )}
    </View>
  )}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => item.id || index.toString()}
  contentContainerStyle={styles.horizontalListContent}
/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  types:{
    marginVertical: 20,

  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  specialCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    width: 70,
    height: 70,
    marginRight: 10,
    marginLeft: 40
  },
  cardContainer: {
    
    margin: 10,
    alignItems: "center",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    marginRight:10,
    width: 70,
    height: 70,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignItems: 'center',

  },
  cardText: {
    color: "black",
    textAlign: "center",
    marginVertical: 5,
  },
});