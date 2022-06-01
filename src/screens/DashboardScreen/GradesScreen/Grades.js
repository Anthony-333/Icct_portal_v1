import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import ComingSoon from '../../../components/ComingSoonScreen/ComingSoon';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Grades = () => {
  return (
    <View style={{backgroundColor: '#fff', height: height}}>
      <ComingSoon />
    </View>
  );
};

export default Grades;
