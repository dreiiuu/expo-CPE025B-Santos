import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  // The two said functions
  // We removed the code for the goalInputHandler.
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // The goal was to display the entered text when the ‘Add Goal’ button is pressed.
  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      
      {/* First nested View */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your Course Goal" 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}/>
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