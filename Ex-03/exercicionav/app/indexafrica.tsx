import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function africa() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Africa</Text>
      {/* Add additional content for the Africa screen here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
  },
});