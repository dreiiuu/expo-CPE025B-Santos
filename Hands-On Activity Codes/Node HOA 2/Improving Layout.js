import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      
      {/* First nested View */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your Course Goal" 
          style={styles.textInput} 
        />
        <Button title="Add Goal" />
      </View>

      {/* Second nested View */}
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,          
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    width: '70%',
    padding: 13,
    borderWidth: 2,
    borderColor: '#cccccc',
    marginRight: 8
  },
  goalsContainer: {
    flex: 5
  },
});