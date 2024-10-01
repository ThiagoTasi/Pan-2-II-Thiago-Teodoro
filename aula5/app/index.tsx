import React, { useState } from 'react'
import { View, Text, TextInput, Button } from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
//npm install firebase@latest

// Configuraçoes do Firebase (substitua pelo seus valores)
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId:"",
  storageBucket:"",
  messaginSenderId:"",
  appId: ""
};

// Inicilize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try{
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        // o usuário foi criado com sucesso
        const user = userCredential.user;
        console.log('Usuário criado com sucesso:', user);
      })
      .catch((error) => {
        // Tratar erros de cadastro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar usuário:', error);
      });
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      />
      <TextInput
      placeholder="Senha"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
      </View>
  );
};

export default App;


  
    