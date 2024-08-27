import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Clique Aqui e morra!"
        onPress={() => alert('Botão pressionado!')}
      />
    </View>
  );
};

export default App;