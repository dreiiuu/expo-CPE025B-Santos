import { StyleSheet, View, Text, Button } from 'react-native';

const styles2 = {
  textStyle: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'blue',
    color: 'white',
    padding: 16,
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Hello world!</Text>

      <View>
        <Text style={styles2.textStyle}>Hello, I am dreiiuu!</Text>
        <Button title="Tap me!" color="green" />
      </View>

      <View>
        <Text style={styles2.textStyle}>Hello, this is a new text!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});