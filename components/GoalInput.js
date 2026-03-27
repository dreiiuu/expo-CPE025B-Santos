import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
  props.onAddGoal(enteredGoalText);
  setEnteredGoalText(''); 
}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goals!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add Goal" onPress={addGoalHandler} color={'#3f7579'}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
  }
});