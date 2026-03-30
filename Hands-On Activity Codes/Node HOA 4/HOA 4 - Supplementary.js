import { StyleSheet, View, Text, FlatList, Modal, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Header from './components/Header';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
  }

  function confirmDeleteGoal(key) {
    setGoalToDelete(key);
    setDeleteModalVisible(true);
  }

  function handleDeleteConfirmed() {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalToDelete)
    );
    setGoalToDelete(null);
    setDeleteModalVisible(false);
  }

  function handleDeleteCancelled() {
    setGoalToDelete(null);
    setDeleteModalVisible(false);
  }

  useEffect(() => {
    if (courseGoals.length > 5) {
      setModalVisible(true);
    }
  }, [courseGoals]);

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
          renderItem={(itemData) => <GoalItem text={itemData.item.text}
          onDelete={() => confirmDeleteGoal(itemData.item.key)}
           />}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ⚠️ You are at risk of overwhelming yourself with too much burden.
            </Text>
            <Pressable onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        visible={deleteModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleDeleteCancelled}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              🗑️ Are you sure you want to delete this goal?
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Pressable
                onPress={handleDeleteConfirmed}
                style={[styles.modalButton, { marginRight: 10, backgroundColor: '#8b0000' }]}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </Pressable>
              <Pressable
                onPress={handleDeleteCancelled}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

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
  },
   modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fffaf3',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#4b2e2b',
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: '#3f7579',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});