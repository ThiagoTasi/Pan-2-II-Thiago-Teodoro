import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore1';

const firebaseConfig = {
  apiKey: "AIzaSyBEyByvJq-1i5euRn6Oh1pC-m9x1eB0eBs",
  authDomain: "meuprimeirofirebase-d50fe.firebaseapp.com",
  projectId: "meuprimeirofirebase-d50fe",
  storageBucket: "meuprimeirofirebase-d50fe.appspot.com",
  messagingSenderId: "928685046602",
  appId: "1:928685046602:web:6c74ea002b160783d9dfb3"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>Lista de nomes:</Text>
      <FlatList
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        </View>
      )}
      />
      </View>
  );
}

      


