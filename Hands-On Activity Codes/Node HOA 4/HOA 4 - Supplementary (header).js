import { View, Text, StyleSheet, Pressable, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';


function Header() {
  
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <View style={styles.header}>
      
      {/* Title and Flag icon */}
      <View style={styles.row}>
        <Text style={styles.title}> My Personal Goals!</Text>

        {/* USER ICON / FLAG ICON */}
        <Pressable onPress={() => setWelcomeVisible(true)}>
          <MaterialIcons name="flag" size={26} style={styles.icon} />
        </Pressable>
      </View>

      {/* My subtitle now with icon */}
      <View style={styles.subtitleRow}>
        <MaterialIcons name="lightbulb-outline" size={16} color="#7a5c4d" />
        <Text style={styles.subtitle}>
          Small progress each day leads to strong results over time.
        </Text>
      </View>

      <Modal
        visible={welcomeVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setWelcomeVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              🎉 Welcome to My Goals App!
            </Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setWelcomeVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4b2e2b'
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  subtitle: {
    fontSize: 13,
    color: '#7a5c4d',
    marginLeft: 6
  },
  icon: {
    color: '#4b2e2b',
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#f0e6d6'
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