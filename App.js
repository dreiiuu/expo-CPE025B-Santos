import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Button title="Tap me!" color="green" />
      </View>
      {/* Team Members (We are 5 members in the team) */}
      <Text style={styles.textBlue}>Bona, Andrei Nycole So</Text>
      <Text style={styles.textBlue}>Cruz, Danielle Patrick</Text>
      <Text style={styles.textBlue}>Delavin, Katarina Nicole</Text>
      <Text style={styles.textHex}>Guariño, Danica</Text>
      <Text style={styles.textHex}>Santos, Andrei</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBlue: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },

  textHex: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#003375',
  },
});