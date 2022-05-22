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

  const [selectedDate, setSelectedDate] = useState(null);

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  return (
    <View style={{width: width / 1.1}}>
      <View style={{width: '100%'}}>
        <CustomInput name="Fname" placeholder="First Name" control={control} />
      </View>
      <View style={{width: '100%'}}>
        <CustomInput name="Mname" placeholder="Middle Name" control={control} />
      </View>
      <View style={{width: '100%'}}>
        <CustomInput name="Lname" placeholder="Last Name" control={control} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: width / 4}}>
          <CustomInput name="Suffix" placeholder="Suffix" control={control} />
        </View>
        <View style={{width: width / 2, paddingHorizontal: 10}}>
          <DatePicker />
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default PersonalInformation;
