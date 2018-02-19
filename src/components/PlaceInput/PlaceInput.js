import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = value => {
    this.setState({ placeName: value });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          value={this.state.placeName} 
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}/>
        <Button 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler}
          title="Add place"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '70%'
  }
});
