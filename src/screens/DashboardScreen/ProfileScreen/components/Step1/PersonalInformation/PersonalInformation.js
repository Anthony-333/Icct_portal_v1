import {View, Button, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../../../../../components/CustomInput';
import {useForm} from 'react-hook-form';

import DatePicker from './components/Datepicker';

var width = Dimensions.get('window').width; //full width

const PersonalInformation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={{width: width, flexDirection: 'row'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>First Name</Text>
          <CustomInput
            name="Fname"
            placeholder="First Name"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Middle Name</Text>
          <CustomInput
            name="Mname"
            placeholder="Middle Name"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray', color: 'gray'}}>
            Last Name
          </Text>
          <CustomInput name="Lname" placeholder="Last Name" control={control} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: width / 4}}>
            <Text style={{marginLeft: 10, color: 'gray'}}>Suffix</Text>
            <CustomInput name="Suffix" placeholder="Suffix" control={control} />
          </View>
          <View style={{width: width / 2, paddingHorizontal: 10}}>
            <DatePicker />
          </View>
        </View>
      
      </View>
    </View>
  );
};

export default PersonalInformation;
