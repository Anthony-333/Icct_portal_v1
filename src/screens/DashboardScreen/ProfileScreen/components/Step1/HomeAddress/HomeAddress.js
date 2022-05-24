import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';

import CustomInput from '../../../../../../components/CustomInput';
var width = Dimensions.get('window').width; //full width

const HomeAddress = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={{width: width, flexDirection: 'row'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10}}>Province</Text>
          <CustomInput
            name="Province"
            placeholder="Province"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10}}>City/Municipality</Text>
          <CustomInput
            name="City/Municipality"
            placeholder="City/Municipality"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
        <Text style={{marginLeft: 10}}>Barangay</Text>
          <CustomInput
            name="Barangay"
            placeholder="Baranggay"
            control={control}
          />
        </View>

        <View></View>
      </View>
    </View>
  );
};

export default HomeAddress;
