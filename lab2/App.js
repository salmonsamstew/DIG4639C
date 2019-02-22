import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', nameAvailable: false, isValid: true};
    this.onPress = this.onPress.bind(this);

     }
  onChange(event) {

      this.setState({value: event});

        console.log(this.state.value);
  }

  onPress() {
    console.log("Pressed");
    var greet = 'Hello,' + this.state.value + '!';
    this.setState({name:greet});

     if(/[a-zA-Z]+/.test(this.state.value))
     {
       this.setState({nameAvailable: true});
     }
     else
     {
      this.setState({isValid: false});
     }


  }
  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
      {(!this.state.nameAvailable)
      <View>
      <TextInput style={styles.textInput} onChangeText={this.onChange}>
      {(this.state.isValid)?null:
          <Text style={{color: 'black', fontWeight: 'italic'}}>
            Please enter a valid Name
          </Text>

      }

        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>

        :
        <Text style={{color: 'blue', fontWeight: 'bold'}}>
          Hello, {this.state.value}!
        </Text>
      }
    );
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
