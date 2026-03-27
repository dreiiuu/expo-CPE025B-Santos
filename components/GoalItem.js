import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
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