import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';

import React, {useState} from 'react';

//custom components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomImages from '../../components/CustomImages';
import CustomColor from '../../components/CustomColor';

import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

import {useForm} from 'react-hook-form';

//icons

import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [secureText, setSecureText] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    const {email, password} = data;

    if (loading) {
      return;
    }

    setLoading(true);
    
    try {
      const user = await Auth.signIn(email, password);
      navigation.navigate('OtpScreen', {user});
    } catch (e) {
      Alert.alert('Error', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={CustomImages.icctLogo}
          style={{
            marginTop: 70,
            marginBottom: 20,
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}
        />

        <View style={{width: width, paddingHorizontal: 20}}>
          <Text
            style={{
              color: CustomColor.black,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Student Online Portal
          </Text>
          <Text style={styles.des}>
            Please fill in the blank to access portal
          </Text>
        </View>

        <CustomInput
          name="email"
          placeholder="Email"
          leftIcon={<Ionicons name="mail" size={24} color="#0067FF" />}
          control={control}
          rules={{
            required: 'Password is Required',
            minLength: {
              value: 3,
              message: 'Password must be at least 8 Characters long',
            },
          }}
        />
        {/* <CustomInput
          name="email"
          placeholder="Email"
          leftIcon={<Ionicons name="mail" size={24} color="#0067FF" />}
          control={control}
          rules={{
            required: 'Email is Required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        /> */}
        <CustomInput
          name="password"
          placeholder="Password"
          leftIcon={<Entypo name="lock" size={24} color="#0067FF" />}
          rightIcon={
            <TouchableOpacity
              onPress={
                secureText
                  ? () => setSecureText(false)
                  : () => setSecureText(true)
              }>
              {secureText ? (
                <FontAwesome name="eye-slash" size={24} color="#6B6B6B" />
              ) : (
                <FontAwesome name="eye" size={24} color="#0067FF" />
              )}
            </TouchableOpacity>
          }
          secureTextEntry={secureText}
          control={control}
          rules={{
            required: 'Password is Required',
            minLength: {
              value: 3,
              message: 'Password must be at least 8 Characters long',
            },
          }}
        />

        <TouchableOpacity onPress={onForgotPasswordPressed}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#0067FF',
              width: width,
              textAlign: 'right',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          text={
            loading ? (
              <View style={{flexDirection: 'row'}}>
                <ActivityIndicator size={20} color="#ffffff" />
                <Text
                  style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    paddingHorizontal: 5,
                  }}>
                  Loading...
                </Text>
              </View>
            ) : (
              'Sign In'
            )
          }
          onPress={handleSubmit(onSignInPressed)}
        />

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>New Student?</Text>
          <TouchableOpacity onPress={onSignUpPressed}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#0067FF',
                paddingHorizontal: 5,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    height: height,
    backgroundColor: '#fff',
  },

  logo: {
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
