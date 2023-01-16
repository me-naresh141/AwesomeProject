import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import CompanyData from './components/companyData';
import UserData from './components/userdata';
import Extstyle from './style';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const resetFormData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <Text style={{color: 'green', fontSize: 30}}>
        Simple Form in React-native
      </Text>
      <TextInput
        style={style.input}
        placeholder="Enter User name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={style.input}
        placeholder=" Enter User email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={style.input}
        placeholder=" Enter User Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={{marginBottom: 20}}>
        <Button
          color={'green'}
          title="print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 30, color: 'orange'}}>
              User name is:{name}
            </Text>
            <Text style={{fontSize: 30, color: 'orange'}}>
              User email is :{email}
            </Text>
            <Text style={{fontSize: 30, color: 'orange'}}>
              User Password:{password}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

// external css

const style = StyleSheet.create({
  input: {
    fontSize: 20,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 10,
  },
});
export default App;
