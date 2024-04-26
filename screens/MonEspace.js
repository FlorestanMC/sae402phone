import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MonEspaceView() {

    const navigation = useNavigation();

    const NavigateAjout = () => {
        navigation.navigate("AjoutAnimal");
    };

    

   

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Mes Animaux</Text>
            <InfoUser></InfoUser>
           <ListAnimauxUser></ListAnimauxUser>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={NavigateAjout} style={styles.button}>
                    Ajouter un animal
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    heading: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: 'blue', // Changer la couleur selon le design system
        width: '50%',
    },
});