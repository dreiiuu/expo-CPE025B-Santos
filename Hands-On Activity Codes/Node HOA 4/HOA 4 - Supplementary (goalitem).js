import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      {/* ICON at the start */}
      <MaterialIcons
        name="flag"         
        size={18}
        color="#fffaf3"
        style={styles.goalIcon}
      />
      {/* Goal text */}
      <View style={{ flex: 1 }}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>

            {/* DELETE ICON */}
      <Pressable onPress={props.onDelete} style={styles.deleteIcon}>
        <MaterialIcons name="delete" size={20} color="#fffaf3" />
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a67c52',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  goalIcon: {
    marginRight: 8
  },
  goalText: {
    color: '#fffaf3',
    fontSize: 14,
    flexWrap: 'wrap'
  },
    deleteIcon: {
    padding: 6,
    borderRadius: 15,
    backgroundColor: '#4f2a2a',
    marginLeft: 'auto'
  }
});