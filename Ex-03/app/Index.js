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
       <Image
        source={{ uri: 'https://w7.pngwing.com/pngs/916/379/png-transparent-flag-of-south-africa-map-flag-miscellaneous-flag-map.png' }}
        style={styles.image}
      />
        <Image
        source={{ uri: 'https://media.istockphoto.com/id/483348293/pt/vetorial/bandeira-da-%C3%A1frica-do-sul.jpg?s=612x612&w=0&k=20&c=2iVnQN1te8IF8MpXmNEYXJgsf2ZWpeN7dJUDumWTt_g=' }}
        style={styles.image}
      />
        <Image
        source={{ uri: 'https://democraciasocialista.org.br/wp-content/uploads/2016/08/1200408-300x220.jpg' }}
        style={styles.image}
      />
        <Image
        source={{ uri: 'https://static.historiadomundo.com.br/2022/08/selo-mandela-klerk.jpg' }}
        style={styles.image}
      />
        <Image
        source={{ uri: 'https://c.files.bbci.co.uk/EC5B/production/_116570506_gettyimages-2659675.jpg' }}
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