import React from 'react';
import {Text, View} from 'react-native';
import CompanyData from './components/companyData';
import UserData from './components/userdata';
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}> 7th day</Text>
      <Text style={{fontSize: 30}}> Hello React Native</Text>
      <Text style={{fontSize: 30}}> This is my first project</Text>
      <UserData />
      <CompanyData />
    </View>
  );
};

export default App;
