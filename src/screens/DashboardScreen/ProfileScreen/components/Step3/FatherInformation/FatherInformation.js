import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';

import CustomInput from '../../../../../../components/CustomInput';
var width = Dimensions.get('window').width; //full width

const FatherInformation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={{width: width, flexDirection: 'row'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Full Name</Text>
          <CustomInput
            name="Full Name"
            placeholder="Full Name"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Age</Text>
          <CustomInput
            name="Age"
            placeholder="Age"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Contact Number</Text>
          <CustomInput
            name="Contact Number"
            placeholder="Contact Number"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Philhealth No.</Text>
          <CustomInput
            name="Philhealth No."
            placeholder="Philhealth No."
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Occupation</Text>
          <CustomInput
            name="Occupation"
            placeholder="Occupation"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Province</Text>
          <CustomInput
            name="Province"
            placeholder="Province"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>City/Municipality</Text>
          <CustomInput
            name="City/Municipality"
            placeholder="City/Municipality"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Barangay</Text>
          <CustomInput
            name="Barangay"
            placeholder="Barangay"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Complete Address</Text>
          <CustomInput
            name="Complete Address"
            placeholder="Complete Address"
            control={control}
          />
        </View>


      </View>
    </View>
  );
};

export default FatherInformation;
