import {View, Text} from 'react-native';
import Extstyle from '../style';
const UserData = () => {
  return (
    <View>
      <Text style={Extstyle.textBox}> This is external style</Text>
      <Text style={Extstyle.textBox}>Name:Naresh</Text>

      <Text style={{fontSize: 30}}>age:20</Text>
    </View>
  );
};

export default UserData;
