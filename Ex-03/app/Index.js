import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('africa')}
      >
        <Text style={styles.buttonText}>Go to Africa</Text>
      </Pressable>
      <Text style={styles.quote}>
        “Do not judge me by my successes, judge me by how many times I fell down and got back up again.”
      </Text>
      <Image
        source={{ uri: 'https://images03.brasildefato.com.br/69c85ca1608808c4af912912b1fd6ff4.jpeg' }}
        style={styles.image}
      />
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
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  quote: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 450,
    height: 350,
    borderRadius: 10,
  },
});