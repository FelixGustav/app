import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from './RegisterStyle';
const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const isValidEmail = (email: string): boolean => {
    
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleRegister = () => {

    if (!name || !email || !password || !cpf) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }
    Alert.alert('Success', 'User registered successfully!');
  
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Button title="Register" onPress={handleRegister} color="#007BFF" />
      </View>
    </View>
  );
};

export default RegisterScreen;
