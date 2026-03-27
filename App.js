import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📘 My Personal Goals!</Text>
        <Text style={styles.subtitle}>
          Small progress each day leads to strong results over time.
        </Text>
      </View>

      {/* Goal Input */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* Goals List */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
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

  goalListContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f0e6d6',
  }
});