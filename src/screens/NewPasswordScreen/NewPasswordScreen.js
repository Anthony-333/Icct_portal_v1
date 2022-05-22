import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

import CustomImages from '../../components/CustomImages';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const NewPasswordScreen = () => {
  const route = useRoute();

  const username = route?.params?.email;

  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(username, data.code, data.password);

      Alert.alert('Success', 'Your password was successfully updated', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SignIn'),
        },
      ]);
    } catch (e) {
      Alert.alert('Failed', e.message);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={CustomImages.newPassword}
          style={{
            paddingVertical: 20,
            height: 200,
            width: 200,
            resizeMode: 'contain',
          }}
        />

        <Text style={styles.logo}>Reset your Password</Text>

        <CustomInput
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{
            required: 'Confirmation Code is required.',
            minLength: {
              value: 6,
              message: '6 digits required',
            },
          }}
        />

        <CustomInput
          name="password"
          placeholder="New password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'New password is required.',
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;
