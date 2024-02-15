import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bgcol}>Hey World!</Text><Text> Its a simple app that just displays</Text> <Text style={[styles.mkbold, styles.bgcolgrn]}>This Texts</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mkbold:{
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgcol:{
    backgroundColor: '#fb09'
  },
  bgcolgrn:{
    backgroundColor: "rgb(0,255,1)",
  }
});
