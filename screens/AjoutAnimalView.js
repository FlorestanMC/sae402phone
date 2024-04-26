import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Avatar, Card, RadioButton } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function AjouterAnimal() {

    const [prenom, setPrenom] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [specificite, setSpecificite] = useState('');
    const [genre, setGenre] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState('');

    const handleButtonClick = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel) {
                setPhoto(response.uri);
            }
        });
    };

    const handleSubmit = () => {
        // Logique de soumission du formulaire...
    };

    const navigation = useNavigation();

    const NavigateCancel = () => {
        navigation.navigate("Accueil");
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.heading}>Ajout Animal</Text>
            
            <Avatar.Image
                size={100}
                source={{ uri: photo }}
                style={styles.avatar}
            />
            <Button onPress={handleButtonClick} style={styles.uploadButton}>Charger une photo</Button>
            <TextInput
                label="Prénom"
                value={prenom}
                onChangeText={text => setPrenom(text)}
                style={styles.input}
            />
            <TextInput
                label="Race"
                value={race}
                onChangeText={text => setRace(text)}
                style={styles.input}
            />
            <TextInput
                label="Age"
                value={age}
                onChangeText={text => setAge(text)}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                label="Description"
                value={description}
                onChangeText={text => setDescription(text)}
                multiline
                style={styles.input}
            />
            <TextInput
                label="Spécificité"
                value={specificite}
                onChangeText={text => setSpecificite(text)}
                multiline
                style={styles.input}
            />
            <View style={styles.radioGroup}>
                <RadioButton.Group
                    onValueChange={value => setType(value)}
                    value={type}
                >
                    <View style={styles.radioButton}>
                        <Text>Chat</Text>
                        <RadioButton value="Chat" />
                    </View>
                    <View style={styles.radioButton}>
                        <Text>Chien</Text>
                        <RadioButton value="Chien" />
                    </View>
                    <View style={styles.radioButton}>
                        <Text>Oiseau</Text>
                        <RadioButton value="Oiseau" />
                    </View>
                    <View style={styles.radioButton}>
                        <Text>Poisson</Text>
                        <RadioButton value="Poisson" />
                    </View>
                    <View style={styles.radioButton}>
                        <Text>Lapin</Text>
                        <RadioButton value="Lapin" />
                    </View>
                </RadioButton.Group>
            </View>
            <TextInput
                label="Genre"
                value={genre}
                onChangeText={text => setGenre(text)}
                style={styles.input}
            />
            <TextInput
                label="Localisation"
                value={localisation}
                onChangeText={text => setLocalisation(text)}
                style={styles.input}
            />
            <Button onPress={handleSubmit} mode="contained" style={styles.submitButton}>Valider</Button>
            
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        marginTop: '15%'
        
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    uploadButton: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    avatar: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    submitButton: {
        marginTop: 20,
        
    },
    
});