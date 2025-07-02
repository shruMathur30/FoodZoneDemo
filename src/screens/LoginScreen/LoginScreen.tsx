import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/userSlice';
import { auth } from '../../firebase/firebaseConfig';
import styles from './LoginStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<'email' | 'password' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(login({ email: user.email || '' }));
    } catch (error: any) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput
        placeholder="Email"
        style={[
          styles.input,
          focusedInput === 'email' && styles.inputFocused,
        ]}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <View style={styles.passwordWrapper}>
        <TextInput
          placeholder="Password"
          style={[
            styles.input,
            focusedInput === 'password' && styles.inputFocused,
            { paddingRight: 40 },
          ]}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
        <Image style={styles.eyeText} source={showPassword ? require('../../assets/images/view.png') : require('../../assets/images/hide.png')} />
        </TouchableOpacity>
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
