import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const IconButton = ({ title, icon, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5
  },
  icon: { width: 24, height: 24, marginRight: 10 },
  text: { fontSize: 16, color: '#fff' }
});

export default IconButton;

