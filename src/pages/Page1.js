import React from 'react';
import { View, Button, Text } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para End"
      onPress={() => navigation.navigate('End') }
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
  headerStyle:{
    backgroundColor: '#7159C1'
  },
  headerTintColor: 'white',
}

export default Page1;