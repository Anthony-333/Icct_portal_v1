import {View, Text, Dimensions} from 'react-native';
import React from 'react';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

import CustomTable from '../../CustomTable';
import TableItems from '../../tableItems';

const GradeItem1 = () => {
  return (
    <View
      style={{
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5,
      }}>
      <Text> </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        }}>
        <View style={{width: width / 2}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#0067FF',
            }}>
            School Year
          </Text>
          <Text style={{marginLeft: 20, color: 'gray'}}>2021 - 2022</Text>
        </View>
        <View style={{width: width / 2}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#0067FF',
            }}>
            Term
          </Text>
          <Text style={{marginLeft: 20, color: 'gray'}}>First</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        }}>
        <View style={{width: width / 2}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#0067FF',
            }}>
            Course
          </Text>
          <Text style={{marginLeft: 20, color: 'gray'}}>
            BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
          </Text>
        </View>
        <View style={{width: width / 2}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#0067FF',
            }}>
            Year Level
          </Text>
          <Text style={{marginLeft: 20, color: 'gray'}}>Third Year</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        }}>
        <View style={{width: width / 2}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#0067FF',
            }}>
            GPA
          </Text>
          <Text style={{marginLeft: 20, color: 'gray'}}>1.00</Text>
        </View>
        <View style={{width: width / 2}}></View>
      </View>

      <CustomTable
        tableHeadItems={[
          '#',
          'Subject Code',
          'Subject Title',
          'Professor',
          'Units',
          'Section',
          'Preliminary Grading Period',
          'Midterm Grading Period',
          'Final Grading Period',
          'Grade Status',
        ]}
        widthArrItems={[30, 100, 300, 100, 60, 100, 150, 150, 100, 100]}
        rowDataItems={TableItems.table1}
      />

      <Text> </Text>
    </View>
  );
};

export default GradeItem1;
