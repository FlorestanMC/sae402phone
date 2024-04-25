import * as React from 'react';
// -- useTheme est un hook permettant d'acceder au theme de l'app
import { Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
export default function Truc() {
 const theme = useTheme();
 return (
 <Text
 variant="titleLarge"
 /* cette syntaxe permet de composer l'utilisation
 - d'un Stylesheet défini ci-bas
 - d'un style local
 - et d'un style du theme
 */
 style={[
 styles.text,
 { color: 'green',
 backgroundColor: theme.colors.myOwnColor
 }]}
 >Un truc</Text>
)}
const styles = StyleSheet.create({
 text: {
 marginBottom: 40,
 textAlign: 'center',
 },
});