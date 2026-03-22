import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📘 My Personal Goals! </Text>
        <Text style={styles.subtitle}>
          Small progress each day leads to strong results over time.
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your Course Goal" 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add" onPress={addGoalHandler} color="#6f4e37" />
      </View>

      {/* Goals List */}
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#f5f0e6'
  },

  header: {
    backgroundColor: '#fffaf3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,

    // subtle depth
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4b2e2b'
  },

  subtitle: {
    fontSize: 13,
    color: '#7a5c4d',
    marginTop: 4
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  textInput: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#d6c6b8',
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#fffaf3'
  },

  goalsContainer: {
    flex: 5
  },

  goalItem: {
    backgroundColor: '#a67c52',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  goalText: {
    color: '#fffaf3',
    fontSize: 14
  }
});