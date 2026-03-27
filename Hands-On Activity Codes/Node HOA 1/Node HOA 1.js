import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, I am <Text style={styles.highlight}>dreiiuu</Text> 👋
      </Text>
      <Text style={styles.fullName}>ANDREI R. SANTOS</Text>
      <Text style={styles.subtitle}>
        A 3rd Year Computer Engineering Student
      </Text>
      <View style={styles.divider} />
      <Text style={styles.description}>
        This is the start of the activity for our React Native ideas. Let's
        build something awesome! 🚀
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },

  highlight: {
    color: '#FFD700',
  },

  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
    letterSpacing: 1.5,
    marginBottom: 12,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#333333',
    width: '80%',
    marginBottom: 20,
  },

  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#B0B0B0',
    lineHeight: 24,
  },
});
