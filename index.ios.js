/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  DatePickerIOS,
} from 'react-native'

export default class rnSeed extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          text: '',
          dataSource: ds.cloneWithRows([
              'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
          ])};
    }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions, styles.lightgreen}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
        </View>

        <Image source={pic} style={{width: 193, height: 130}}/>

        <View style={{alignItems: 'center', width: 400, height: 50, backgroundColor: 'powderblue'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
           <Greeting name='Valeera' />
        </View>


        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{margin: 10, padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />

<DatePickerIOS 
  date={(this.state && this.state.date) || new Date()}
  onDateChange={(newDate) => {
    this.setState({date: newDate})
  }}
  mode={'datetime'}
  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
/>
      </ScrollView>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'steelblue',
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

let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

AppRegistry.registerComponent('rnSeed', () => rnSeed);
