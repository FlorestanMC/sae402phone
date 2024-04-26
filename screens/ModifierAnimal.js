import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Avatar, Card, RadioButton } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ModifierAnimal() {

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

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Modification Animal</Text>
            <Button onPress={handleButtonClick} style={styles.uploadButton}>Charger une photo</Button>
            <Avatar.Image
                size={100}
                source={{ uri: photo }}
                style={styles.avatar}
            />
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
                <Text>Type :</Text>
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
            <Button mode="outlined" style={styles.cancelButton}>Annuler</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
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
        backgroundColor: 'blue', // Changer la couleur selon le design system
    },
    cancelButton: {
        marginTop: 10,
        borderColor: 'blue', // Changer la couleur selon le design system
    },
});