import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      
      {/* First nested View */}
      <View>
        <TextInput placeholder="Your Course Goal" />
        <Button title="Add Goal" />
      </View>

      {/* Second nested View */}
      <View>
        <Text>List of Goals</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});