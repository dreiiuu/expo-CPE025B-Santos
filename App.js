import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Header from './components/Header';

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
      <Header />

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

  goalListContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f0e6d6',
  }
});