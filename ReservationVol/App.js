/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 

 /*========================     commandes git pour les nuls     =====================

              git add --all  /ou (pour modifier le ou les fichiers dans la branche master)
              git add +fichier 
              git log --online +nom fichier /pour voir les commit effectuer sur le fichier
              git stutus 
 =            git commit -a -m /pour mettre a jour le doc sur le git            =
              git  checkout + nomde l'id du commit /retour en arriere au niveau de la modif  sauvegarder
              git  checkout + id /pour voir l'etat d'un fichier soit avant modif soit apres
              git checkout master /pour revenir au debut


              git revert +id / permet de defaire un commit(pas de perte dans l'historique)
              git reset +id / retour en arriere (pas de securitée)

              git checkout master /pour revenir sur la branche master
              git checkout +nombranch / pour revenir sur la branch
              git branch + nom /pour crée une branche
              


 =============================================*/
 
 
 
 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
