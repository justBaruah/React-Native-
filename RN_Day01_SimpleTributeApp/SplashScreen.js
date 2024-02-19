import React from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const goToMainScreen = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <ImageBackground source={require('./ShivajiBG2.jpg')} style={styles.container} imageStyle={{ borderRadius: 30 }}>
      <Text style={styles.text}>Happy Shiv Jayanti</Text>
      <TouchableOpacity onPress={goToMainScreen}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Har Har Mahadev</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    backgroundColor: 'orange',
    height: 35,
    alignContent: 'center',
    justifyContent: 'center',
    width: 220,
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 550,
    paddingTop: 5
  },
  image: {
    width: '90%',
    height: '90%',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
