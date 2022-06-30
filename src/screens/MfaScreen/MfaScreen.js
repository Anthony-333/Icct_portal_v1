import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {Auth} from 'aws-amplify';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const MfaScreen = () => {
  const {control, handleSubmit} = useForm();

  const route = useRoute();

  const user = route?.params?.user;
  // var username = route?.params?.email;
  // var password = route?.params?.password;


  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onConfirmPressed = async data => {

      if (loading) {
        return;
      }

      setLoading(true);

      try {
        await Auth.confirmSignIn(user, data.code, 'SMS_MFA');

       
      } catch (e) {
        Alert.alert('error', e.message);
      }
      setLoading(false);

  };

  // const onResendPressed = async () => {
  //   if (loading) {
  //     return;
  //   }

  //   setLoading(true);

  //    try {
  //     const user = await Auth.signIn(username, password);
  //     navigation.navigate('OtpScreen', {user, username , password});
 
  //   } catch (e) {
  //     Alert.alert('Error', e.message);
  //   }
  //   setLoading(false);
  // };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../../components/Images/otp.png')}
          style={{
            paddingVertical: 20,
            height: 200,
            width: 200,
            resizeMode: 'contain',
          }}
        />

        <Text style={styles.logo}>OTP Verification</Text>

        {/* <CustomInput
          name="confirmation_code"
          placeholder="Confirmation code"
          control={control}
          rules={{
            required: "Confirmation code is Required",
          }}
        /> */}

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

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
              'Confirm'
            )
          }
          onPress={handleSubmit(onConfirmPressed)}
        />

        {/* <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        /> */}

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
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
    height: height,
    backgroundColor: '#fff',
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

export default MfaScreen;
