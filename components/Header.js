import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>📘 My Personal Goals!</Text>
      <Text style={styles.subtitle}>
        Small progress each day leads to strong results over time.
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4b2e2b'
  },
  subtitle: {
    fontSize: 13,
    color: '#7a5c4d',
    marginTop: 4
  }
});

