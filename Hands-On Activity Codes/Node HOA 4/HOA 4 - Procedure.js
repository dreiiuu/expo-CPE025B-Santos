// Note, this is the only file I used to do the proceudre part for th eHOA 4 of the Node.js
// I amange to do experiments such as doing pressable vs button and learn more about pressables

import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [isLongPressed, setIsLongPressed] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

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
        <Pressable
          onPress={addGoalHandler}                    
          onLongPress={() => setIsLongPressed(true)}
          onPressOut={() => setIsLongPressed(false)}
          disabled={enteredGoalText.length === 0}
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            isLongPressed && styles.longPressedButton,
            enteredGoalText.length === 0 && styles.disabledButton
          ]}
        >
          <Text style={styles.buttonText}>Add Goal</Text>
        </Pressable>
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
  },
  button: {
  backgroundColor: '#3f7579',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8
  },
  buttonPressed: {
    opacity: 0.7
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  longPressedButton: {
  backgroundColor: '#8b0000'
  },
  disabledButton: {
    backgroundColor: '#999'
  }
});