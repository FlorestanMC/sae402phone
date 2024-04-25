import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Card, IconButton, Title, Paragraph, Avatar, List, Divider } from 'react-native-paper';

export default function AnimalDetail(props) {
    console.log(props)
    const { idAnimal } = props.route.params;
    const [animal, setAnimal] = useState(null);
    const [icon, setIcon] = useState('heart-outline'); // État pour suivre l'icône actuelle
  
    const handleIconPress = () => {
      setIcon(icon === 'heart-outline' ? 'heart' : 'heart-outline'); // Changer l'icône lors du clic
    };

    useEffect(() => {
        const fetchAnimalDetails = async () => {
            try {
                const response = await fetch(`https://milhet.alwaysdata.net/sae401/api/animaux/${idAnimal}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAnimal(data);
            } catch (error) {
                console.error('Error fetching animal details:', error);
            }
        };

        fetchAnimalDetails();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {animal && (
                <View>
                    
                    <View style={styles.header}>
                    <IconButton onPress={ () => props.navigation.navigate("Accueil")} icon="arrow-left-bold" size={30} color="white" style={styles.iconButton} />
                        <View style={styles.iconsContainer}>
                            <IconButton
                                icon={icon}
                                color="#FF5733"
                                size={30}
                                onPress={handleIconPress}
                                />
                            <IconButton icon="flag" size={30} color="white" style={styles.iconButton} onPress={() => { }} />
                        </View>
                    </View>
                    <Card style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <Image
                                source={{ uri: `https://milhet.alwaysdata.net/sae401/images/${animal.PHOTO}` }}
                                style={styles.image}
                            />
                            <Title style={styles.title}>{animal.PRENOM}</Title>
                            <List.Item
                                title={`${animal.LOCALISATION}`}
                                left={() => <List.Icon icon="map-marker" />}
                                titleStyle={styles.localisation}
                            />
                            <List.Item
                                title={`${animal.RACE}`}
                                left={() => <List.Icon icon="paw" />}
                                titleStyle={styles.listItemTitle}
                            />
                            <List.Item
                                title={`${animal.GENRE === 0 ? 'Mâle' : 'Femelle'}`}
                                left={() => animal.GENRE === 0 ? <List.Icon icon="gender-male" style={styles.gender}/> : <List.Icon icon="gender-female" style={styles.gender}/>}
                                titleStyle={styles.listItemTitle}
                            />
                            <List.Item
                                title={`${animal.AGE} ${animal.AGE <= 1 ? 'an' : 'ans'}`}
                                left={() => <List.Icon icon="calendar" />}
                                titleStyle={styles.listItemTitle}
                            />
                            <List.Item
                                title={`${animal.LOCALISATION}`}
                                left={() => <List.Icon icon="map-marker" />}
                                titleStyle={styles.listItemTitle}
                            />
                        </Card.Content>
                    </Card>
                    <View style={styles.details}>
                        <Paragraph>{animal.DESCRIPTION}</Paragraph>
                        <Paragraph style={styles.spec}>Spécificités: {animal.SPECIFICITE === null ? 'Aucunes' : animal.SPECIFICITE}</Paragraph>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    breadcrumbs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    header: {
        marginTop: '0%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        marginHorizontal: 5,
    },
    card: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    listItemTitle: {
        fontWeight: 'bold',
    },
    localisation:{

        fontWeight: '300',
    },
    details: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    spec: {
        fontWeight: 'bold',
    },
});
