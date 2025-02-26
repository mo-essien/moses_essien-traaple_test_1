import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavBackButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: 'fit-content'
  },
  text: {
    color: '#6200ea',
    marginLeft: 8,
    fontSize: 16,
  },
});
