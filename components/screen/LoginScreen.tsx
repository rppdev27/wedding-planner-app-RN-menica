import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SvgUri } from 'react-native-svg';

const userSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('No password provided')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain Latin letters')
});

type UserFormData = yup.InferType<typeof userSchema>;

const LoginScreen = ({ navigation }) => {
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

  return (
    <View style={styles.wrap}>
      <View style={styles.svgContainer}>
        <SvgUri width="100%" height="100%" uri={'https://ik.imagekit.io/vtvggda66/undraw_love_re_mwbq(1).svg'} />
      </View>
      {/* <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://ik.imagekit.io/vtvggda66/logo-guest-menica.png?updatedAt=1728009677692'
          }}
        />
      </View> */}
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.formContainer}>
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
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home')}
      />
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default LoginScreen;