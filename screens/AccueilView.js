import { useState } from 'react';
import { Searchbar, Title, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AllAnimaux from "../components/AllAnimaux";
import AffichType from '../components/AffichType';



export default function AccueilView(props) {

    const [searchQuery, setSearchQuery] = useState('');
   


    return (
        <View style={styles.container}>


<View style={styles.head}>
 <Searchbar
        style={styles.searchbar}
        placeholder="Rechercher un animal"
        onChangeText={setSearchQuery}
        value={searchQuery}
        />
                
</View>
        <AffichType {...props} ></AffichType>
        <Title style={styles.title}>Animaux</Title>
        <AllAnimaux searchQuery={searchQuery} {...props}></AllAnimaux>
        </View>
        )
}

const styles = StyleSheet.create({
   
        container: {
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            
        },
        icon: {
            
            backgroundColor: 'rgb(238, 232, 244)',
           marginLeft: 10,
            borderRadius: 40,
        },
        head: {
            
            marginTop: '15%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row'
        },
        searchbar: {
           
            width: '80%',
        },
        text: {
            color:'white',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            alignItems: 'flex-start'
        },
    })
   