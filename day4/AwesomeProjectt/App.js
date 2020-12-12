import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        secureTextEntry={true}
        keyboardType="twitter"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setName(text)}
        value={name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
