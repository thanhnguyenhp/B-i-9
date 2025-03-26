import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    paddingHorizontal: 15 
  }
});

export default CustomTextInput;
