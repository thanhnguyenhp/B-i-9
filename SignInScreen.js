import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import IconButton from '../Components/IconButton.js';
import { AuthContext } from '../context/AuthContext';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext); // Lấy hàm signIn từ context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn(email, password);
    navigation.navigate('MainTabs'); // Điều hướng đến Home sau khi đăng nhập thành công
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <CustomTextInput placeholder="Enter your email here!" value={email} onChangeText={setEmail} />
      <CustomTextInput placeholder="Enter your password here!" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>
      <IconButton title="Google" icon={require('../assets/Flag.png')} backgroundColor="#ccc" />
      <IconButton title="Facebook" icon={require('../assets/Flag.png')} backgroundColor="#3b5998" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  forgotPassword: { color: 'orange', textAlign: 'right' },
  signInButton: { backgroundColor: 'orange', padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { textAlign: 'center', color: 'white', fontSize: 18 },
  or: { textAlign: 'center', marginVertical: 10 }
});

