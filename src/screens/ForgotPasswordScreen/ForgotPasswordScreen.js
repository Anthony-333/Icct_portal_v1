import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const ForgotPasswordScreen = () => {
  const {control, handleSubmit, watch} = useForm();

  const email = watch('username');

  const navigation = useNavigation();

  const onSendPressed = async data => {
    try {
      await Auth.forgotPassword(data.username);
      Alert.alert(
        'Success',
        'Confirmation code is successfully sent to your mobile number.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('NewPasswordScreen', {email}),
          },
        ],
      );
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../../components/Images/forgot_password.png')}
          style={{
            paddingVertical: 20,
            height: 200,
            width: 200,
            resizeMode: 'contain',
          }}
        />

        <Text style={styles.logo}>Reset your Password</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Enter your email"
          rules={{
            required: 'Email is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onBackToSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    height: height,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
