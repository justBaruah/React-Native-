import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Adjust the duration as needed
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const goToMainScreen = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground source={require('./ShivajiBG2.jpg')} style={styles.imageBackground} imageStyle={{ borderRadius: 30 }}>
        <Text style={styles.text}>Happy Shiv Jayanti</Text>
        <TouchableOpacity onPress={goToMainScreen}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Har Har Mahadev</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
