import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';


const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onIncrease = () => {
        setCounter(counter + 1);
  };
  const onDecrease = () => {
        setCounter(counter - 1);
  };
  const onRandom = () => {
        setCounter(Math.floor(Math.random() * 100000000000));
  };
  return (
    <View style={styles.container}>
    <View style={{backgroundColor: 'red', marginBottom: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
      >
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
    </View>
    <View style={{backgroundColor: 'green', marginBottom: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
      >
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
    <View style={{backgroundColor: 'orange', marginBottom: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={onRandom}
      >
        <Text style={styles.text}>Random</Text>
      </TouchableOpacity>
    </View>
    <View style={{backgroundColor: 'grey', marginBottom: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {setCounter(0)}}
      >
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.text}>Current count:</Text>
    <Text style={styles.text}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    alignItems: "center",
    // backgroundColor: 'green',
    margin: 20,
    padding: 10,
    width: 380,
    height: 50
  },
  text:{
    color:'white',
    fontSize: 24
    },
});



export default Counter;
