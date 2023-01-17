import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
const App = () => {
  const data = [
    {
      id: 1,
      name: 'A',
    },
    {
      id: 2,
      name: 'B',
    },
    {
      id: 3,
      name: 'C',
    },
    {
      id: 4,
      name: 'D',
    },
  ];
  return (
    <View>
      <Text style={{color: 'green', fontSize: 30}}>List using Flatlist</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text
            style={{
              fontSize: 20,
              color: 'red',
              borderColor: 'blue',
              borderWidth: 1,
              margin: 10,
            }}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

// external css

export default App;
