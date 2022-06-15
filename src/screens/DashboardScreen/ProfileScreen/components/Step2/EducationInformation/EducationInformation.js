import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';

import CustomInput from '../../../../../../components/CustomInput';
var width = Dimensions.get('window').width; //full width

const EducationInformation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={{width: width, flexDirection: 'row'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>LRN</Text>
          <CustomInput
            name="lrn"
            placeholder="LRN"
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>DSWD Household No.</Text>
          <CustomInput
            name="DSWD Household No."
            placeholder="DSWD Household No."
            control={control}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, color: 'gray'}}>Graduate of</Text>
          <CustomInput
            name="Graduate of"
            placeholder="Graduate of"
            control={control}
          />
        </View>


      </View>
    </View>
  );
};

export default EducationInformation;
