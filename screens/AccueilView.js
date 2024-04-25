import { useState } from 'react';
import { Searchbar, Title } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AllAnimaux from "../components/AllAnimaux";
import AffichType from '../components/AffichType';



export default function AccueilView(props) {

    const [searchQuery, setSearchQuery] = useState('');
   


    return (
        <View style={styles.container}>



 <Searchbar
        style={styles.searchbar}
        placeholder="Rechercher un animal"
        onChangeText={setSearchQuery}
        value={searchQuery}
/>

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
        searchbar: {
            marginTop: '15%',
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
   