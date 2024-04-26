import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InfoUser({}) {

     
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [user_id, setUserId] = useState(null);
    
      
      
    useEffect(() => {

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
          console.log(user_id)
          console.log(accessToken)
        retrieveData();


        
        const fetchInfoUser = () => {
            fetch(`https://milhet.alwaysdata.net/sae401/api/utilisateurs/${user_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Envoyer l'accessToken dans le corps de la requête
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setUser(data);
                })
                .catch((error) => {
                    console.error("Error fetching user infos:", error);
                });
        };

        
        fetchInfoUser();
    }, [user_id]);

    return (
        <View>
            {user && (
                <View style={styles.container}>
                    <View style={styles.userInfoContainer}>
                        <Avatar.Image
                            size={200}
                            style={styles.pdp}
                            source={{ uri: `https://milhet.alwaysdata.net/sae401/images/${user.pdp}` }}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{`${user.prenom} ${user.name}`}</Text>
                            <Text style={styles.userDetails}>{user.localisation}</Text>
                            <Text style={styles.userDetails}>{user.email}</Text>
                            <Text style={styles.userDetails}>{user.telephone}</Text>
                        </View>
                    </View>
                    <Button onPress={() => NavigateModifUser(user.id)} mode="contained" style={styles.editButton}>
                        Modifier
                    </Button>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    userInfo: {
        marginLeft: 20,
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    pdp:{
        width: 180,
        height: 180,
    },
    userDetails: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 5,
    },
    editButton: {
        width: '50%',
        alignSelf: 'center',
    },
});