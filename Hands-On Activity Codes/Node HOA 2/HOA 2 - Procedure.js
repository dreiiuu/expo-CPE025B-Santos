import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  // The two said functions
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
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
          {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
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
    paddingBottom: 10,
    borderBottomWidth: 2,
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