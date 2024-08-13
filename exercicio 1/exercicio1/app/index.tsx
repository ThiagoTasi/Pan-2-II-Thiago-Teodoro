import React, {useState} from 'react';
import {Text, StyleSheet, image} from 'react-native';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Thiago Teodoro");
  const bodyText = 'student in training.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  return (
<View style={styles.container}>
<Image 
        source={{ uri: 'https://diariodonordeste.verdesmares.com.br/estilo-de-vida/pets/cachorro-pit-bull-entenda-tudo-sobre-a-raca-1.3122147' }}
        style={styles.image}
      />
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default TextInANest;