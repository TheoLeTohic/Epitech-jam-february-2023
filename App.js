import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.top}>
        <Text style = {styles.title_top}>Quizz App</Text>
      </View>
      <View style = {styles.card}></View>
      <View style = {styles.card}></View>
      <View style = {styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    top: "2%",
    marginBottom: '5%',
    height: '10%',
    width: '80%',
    backgroundColor: '#2D4159',
    left: '10%',
    borderRadius: 25,
  },
  title_top: {
    top: "65%",
    left: '25%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    //fontFamily,
  },
  top :{
    backgroundColor: '#2D4159',
    width: '100%',
    height: '35%',
    top: '-15%',
    borderRadius: 55,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#242B3E',
  },
});
