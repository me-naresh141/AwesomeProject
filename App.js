import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import CompanyData from './components/companyData';
import UserData from './components/userdata';
import Extstyle from './style';
const App = () => {
  const [name, updateName] = useState('Naresh state in react native');
  function testName() {
    updateName('Naresh practics State');
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          color: 'red',
          backgroundColor: 'green',
          marginBottom: 10,
          textAlignVertical: 'center',
          textAlign: 'center',
          borderRadius: 30,
        }}>
        This is inline Style
      </Text>
      <Text style={style.textBox}> This is internal style</Text>
      <Text style={{fontSize: 30}}> This is my first project</Text>
      <Text style={{fontSize: 30}}> {name}</Text>
      <Button title="Update name" onPress={testName}></Button>
      <UserData />
      <CompanyData />
    </View>
  );
};

// external css

const style = StyleSheet.create({
  textBox: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'blue',
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'red',
    borderWidth: 3,
  },
});
export default App;
