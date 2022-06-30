import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import GradeItem1 from './GradeItem/GradeItem1';


var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Grades = () => {
  return (
    <ScrollView style={{backgroundColor: '#0067FF'}}>
      <View style={{height: 'auto'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
              marginVertical: 30,
            }}>
            Grades
          </Text>
        </View>

        <ScrollView
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 20,
            height: 'auto',
          }}>
          <Text style={{textAlign: 'center', color: 'red'}}>
            This is just a dummy data
          </Text>
          <GradeItem1 />
          <GradeItem1 />
          <GradeItem1 />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Grades;
