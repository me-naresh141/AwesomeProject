import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import CompanyData from './components/companyData';
import UserData from './components/userdata';
const App = () => {
  const [name, updateName] = useState('Naresh state in react native');
  function testName(){
    updateName("Naresh practics State")
  }
  return (
    <View>
      <Text style={{fontSize: 30}}> 7th day</Text>
      <Text style={{fontSize: 30}}> Hello React Native</Text>
      <Text style={{fontSize: 30}}> This is my first project</Text>
      <Text style={{fontSize: 30}}> {name}</Text>
      <Button title="Update name" onPress={testName}></Button>
      <UserData />
      <CompanyData />
    </View>
  );
};

export default App;
