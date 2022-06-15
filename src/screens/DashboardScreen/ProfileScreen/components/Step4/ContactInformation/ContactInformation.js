import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';

import CustomInput from '../../../../../../components/CustomInput';
var width = Dimensions.get('window').width; //full width

const ContactInformation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={{width: width, flexDirection: 'row'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Contact No.</Text>
          <CustomInput
            name="Contact No."
            placeholder="Contact No."
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>
            Alternate Contact No.
          </Text>
          <CustomInput
            name="Alternate Contact No."
            placeholder="Alternate Contact No."
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Email Address</Text>
          <CustomInput
            name="Email Address
            "
            placeholder="Email Address
            "
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Facebook Username</Text>
          <CustomInput
            name="Facebook Username"
            placeholder="Facebook Username"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Twitter Usernamen</Text>
          <CustomInput
            name="Twitter Username"
            placeholder="Twitter Username"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Instagram Username</Text>
          <CustomInput
            name="Instagram Usernamee"
            placeholder="Instagram Username"
            control={control}
          />
        </View>
       
      </View>
    </View>
  );
};

export default ContactInformation;
