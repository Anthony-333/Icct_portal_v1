import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

import CustomImages from '../../components/CustomImages';

// icons import
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {control, handleSubmit, watch} = useForm();
  const [loading, setLoading] = useState(false);
  const pwd = watch('password');

  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    if (toggleCheckBox) {
      const {email, name, phone_number, password, username} = data;
      if (loading) {
        return;
      }

      setLoading(true);
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
            name,
            phone_number,
          },
        });
        navigation.navigate('ConfirmEmail', {username});
      } catch (e) {
        Alert.alert('Error', e.message);
      }
      setLoading(false);
    } else {
      Alert.alert(
        'Failed',
        'You must agree to our Terms of Use and Privacy Policy.',
      );
    }
  };

  const onConfirmCodePressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('PrivacyPolicyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={CustomImages.signup}
          style={{
            paddingVertical: 20,
            height: 200,
            width: 200,
            resizeMode: 'contain',
          }}
        />

        <View style={{width: width, paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            Create an Account
          </Text>
          <Text style={{color: 'gray'}}>Please fill all the input fields.</Text>
        </View>

        <CustomInput
          name="username"
          control={control}
          placeholder="Email"
          leftIcon={<Ionicons name="mail" size={20} color="#0067FF" />}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomInput
          name="fullname"
          control={control}
          placeholder="Full name"
          leftIcon={<FontAwesome5 name="user-alt" size={20} color="#0067FF" />}
          rules={{
            required: 'Full name is required',
            minLength: {
              value: 3,
              message: 'Full name should be atleast 3 Characters long',
            },
          }}
        />

        <CustomInput
          name="phone_number"
          control={control}
          placeholder="Mobile Number"
          leftIcon={<FontAwesome5 name="phone" size={20} color="#0067FF" />}
          rules={{
            required: 'Mobile Number is required',
            minLength: {
              value: 11,
              message: 'Mobile Number should be atleast 11 digits long',
            },
          }}
        />

        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          leftIcon={<Entypo name="lock" size={20} color="#0067FF" />}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password is too short',
            },
            maxLength: {value: 24, message: 'Password is too long'},
          }}
        />
        <CustomInput
          name="confirmpassword"
          control={control}
          placeholder="Confirm Password"
          leftIcon={<Entypo name="lock" size={20} color="#0067FF" />}
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <BouncyCheckbox
            size={20}
            fillColor="#0067FF"
            unfillColor="#FFFFFF"
            iconStyle={{borderColor: '#0067FF', borderRadius: 8}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            isChecked={toggleCheckBox}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          />
          <Text style={styles.text}>
            I have read and accept the{' '}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{' '}
            and
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
              {' '}
              Privacy Policy.
            </Text>
          </Text>
        </View>

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
              'Register'
            )
          }
          onPress={handleSubmit(onRegisterPressed)}
        />

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{fontWeight: 'bold', color: '#909090'}}>
            Forgot to confirm email?
          </Text>
          <TouchableOpacity onPress={onConfirmCodePressed}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#0067FF',
                paddingHorizontal: 5,
              }}>
              Click here
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{fontWeight: 'bold', color: '#909090'}}>
            Already have account?
          </Text>
          <TouchableOpacity onPress={onSignInPressed}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#0067FF',
                paddingHorizontal: 5,
              }}>
              Sign In
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

  text: {
    color: '#909090',
    marginVertical: 10,
  },
  link: {
    color: '#0067FF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
