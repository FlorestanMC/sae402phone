import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { Divider, Paragraph, Title } from 'react-native-paper'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AllConversationsView(props) {
    
    let url = "https://milhet.alwaysdata.net/sae401/api/conversations"
    
    const [conversations, setConversations] = useState([]);    
    const [accessToken, setAccessToken] = useState([]);
    const [user_id, setUserId] = useState([]);
    
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

      retrieveData();

    if (user_id) {
        url += `?idutilisateur=${user_id}`;
      }

    useEffect(() => {
     getConversations();
     }, 
     [url]); 
          
    function getConversations() {
        const fetchOptions = { method: "GET" };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {        
                setConversations(dataJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    
            
    } 

    return (
        
        <ScrollView style={styles.container}>
            
            <Title style={styles.title}>Mes messages</Title>
            <Divider />
            <View onPress={ ()=> props.navigation.navigate("Conversation", {idConversation:conversation.ID_CONVERSATION})} style={styles.row}>
            <Image
              source={{ uri: `https://milhet.alwaysdata.net/sae401/images/rio.png` }}
              style={styles.image}
            />
            <View>
            <Title style={styles.titlebold}>Tonio</Title> 
            <Title style={styles.titlename}>Mégalithe, Européen</Title>
            <Paragraph style={styles.lightweight}>Exemple de Conversation</Paragraph>
            </View>
            </View>
            <Divider />
            <View style={styles.row}>
            <Image
              source={{ uri: `https://milhet.alwaysdata.net/sae401/images/rio.png` }}
              style={styles.image}
            />
            <View>
            <Title style={styles.titlebold}>Tonio</Title> 
            <Title style={styles.titlename}>Mégalithe, Européen</Title>
            <Paragraph style={styles.lightweight}>Exemple de Conversation</Paragraph>
            </View>
            </View>
            <Divider />
            <View style={styles.row}>
            <Image
              source={{ uri: `https://milhet.alwaysdata.net/sae401/images/rio.png` }}
              style={styles.image}
            />
            <View>
            <Title style={styles.titlebold}>Tonio</Title> 
            <Title style={styles.titlename}>Mégalithe, Européen</Title>
            <Paragraph style={styles.lightweight}>Exemple de Conversation</Paragraph>
            </View>
            </View>
            <Divider />
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            paddingTop: '15%',
            backgroundColor: "#fff",
          },
        row: {
            marginVertical: 20,
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems:'center',
            verticalAlign:'middle',
            
        },
        image: {
            width: 100,
            height: 100,
            margin: 10,
            marginRight: 50,
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
        },
        titlebold: {
            fontWeight:'bold',
        },
        lightweight: {
            fontWeight:'200',
        },
        titlename: {
            fontWeight:'400',
        }
    })
        

  