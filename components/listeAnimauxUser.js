import {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
      
      
    


export default function ListAnimauxUser({NavigateModifAnimal }) {
    const [listeAnimaux, setAnimaux] = useState([]);
    const [accessToken, setAccessToken] = useState([]);
    const [user_id, setUserId] = useState([]);
    
  useEffect(() => {
    const url = `https://milhet.alwaysdata.net/sae401/api/animaux/${user_id}/users`;
      const retrieveData = async () => {
          try {
            const accessToken = await AsyncStorage.getItem('UserToken');
            const user_id = await AsyncStorage.getItem('UserId');
            if (accessToken && user_id !== null) {
              setAccessToken(accessToken)
              setUserId(user_id)
              
            }
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
        console.log(url)
        console.log(user_id)
      retrieveData();


       
      const fetchAnimaux = () => {
        const fetchOptions = { method: "GET" };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setAnimaux(dataJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    console.log(listeAnimaux);
    fetchAnimaux();

}, []);
return (
  <ScrollView contentContainerStyle={styles.container}>
    {listeAnimaux.map((animal) => (
      <Card key={animal.ID_ANIMAL} style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.row}>
            <Card.Cover source={{ uri: "https://milhet.alwaysdata.net/sae401/images/" + animal.PHOTO }} style={styles.cover} />
            <View style={styles.info}>
              <Title>{animal.PRENOM}</Title>
              <Paragraph>{animal.GENRE === 0 ? 'Mâle' : 'Femelle'}</Paragraph>
              <IconButton
            icon="pencil"
            color="blue"
            size={30}
            onPress={() => NavigateModifAnimal(animal.ID_ANIMAL)}
          />
            </View>
            
          </View>
          
        </Card.Content>
        <Card.Actions>
          
        </Card.Actions>
      </Card>
    ))}
  </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  marginTop: 10,
},
card: {
  margin: 20,
  width: '100%',
},
cardContent: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
},
cover: {
  width: 180,
  height: 180,
},
info: {
  marginLeft: 20,
},
});