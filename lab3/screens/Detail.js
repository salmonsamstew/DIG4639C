import React from 'react';
<<<<<<< HEAD
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Detail extends React.Component {
  render ()
  {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>These are a few photos I have taken</Text>
            <FlatList
             data={[{key: 'Sax 1',image: require('../assets/images/Sax 1.jpg')}, {key: 'Sax 2',image: require('../assets/images/Sax 2.jpg')}, {key: 'Sexy Sax man',image: require('../assets/images/Sexy Sax man.jpg')}]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { this.props.navigation.navigate('Detail')}}>
                <Image source={item.image} style={{width:200,height:200}} />
              </TouchableOpacity>}
            />
          </View>
        </ScrollView>
=======
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "Detail",
  };
  
  render() {
    const title = this.props.navigation.getParam("title","");
    const image = this.props.navigation.getParam("image",null);
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40,justifyContent:"center",alignContent:"center"}}>{title}</Text>
        <Image style={{flex:1,width:"100%",height:undefined,resizeMode:"contain"}} source={image}></Image>
>>>>>>> cca949b5ff178a251102000ab56290d09980f824
      </View>
    );
  }
}

<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: '#7C0A02',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
=======
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    paddingTop: 15,
    backgroundColor: '#fff',
  },
>>>>>>> cca949b5ff178a251102000ab56290d09980f824
});
