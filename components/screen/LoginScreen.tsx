import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SvgUri } from 'react-native-svg';

import {
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans'


import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

import {
  Kanit_100Thin,
  Kanit_200ExtraLight,
  Kanit_300Light,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_600SemiBold,
  Kanit_700Bold,
  Kanit_800ExtraBold,
  Kanit_900Black,
} from "@expo-google-fonts/kanit";

import {
  Inter_100Thin,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter"

const userSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('No password provided')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain Latin letters')
});

type UserFormData = yup.InferType<typeof userSchema>;

const LoginScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  const { control, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: UserFormData) => {
    Alert.alert(
      "Form Submitted",
      `Email entered: ${data.email}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  // Check if fonts are loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Loading indicator
  }

  return (
    <View style={styles.wrap}>
      <Text style={[styles.titleApp]}>Guest App</Text>
      <View style={styles.svgContainer}>
        <SvgUri width="100%" height="100%" uri={'https://ik.imagekit.io/vtvggda66/undraw_love_re_mwbq(1).svg'} />
      </View>
      <View style={{
        width: '80%',
      }}> 
        <Text>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your email"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        <Text>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your password"
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <View style={{
          width: '100%',
        }}>
          <TouchableOpacity style={styles.button}  onPress={handleSubmit(onSubmit)} >
            <Text style={
              [styles.buttonText,]
            }>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  plusJkt800: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
  },
  titleApp: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    color: '#536DFE',
    letterSpacing: -1,
  },
  button: {
    width: '100%',                  // Full width
    marginTop: 20,                 // Space above the button
    backgroundColor: '#536DFE',    // Green color
    borderRadius: 10,              // Rounded corners
    paddingVertical: 12,           // Vertical padding
    alignItems: 'center',          // Center the text
    justifyContent: 'center',       // Center the text
    elevation: 5,                  // Android shadow
    shadowColor: '#000',           // iOS shadow color
    shadowOffset: {                // iOS shadow offset
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,           // iOS shadow opacity
    shadowRadius: 3.5,             // iOS shadow radius
  },
  buttonText: {
    color: '#fff',                 // Text color
    fontSize: 16,                  // Text size
    fontWeight: 'bold',            // Bold text
    textAlign: 'center',           // Center the text
  },
  
});


export default LoginScreen;

