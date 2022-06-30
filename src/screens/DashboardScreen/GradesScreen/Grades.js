import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import CustomTable from './CustomTable';
import TableItems from './tableItems';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Grades = () => {
  return (
    <ScrollView style={{backgroundColor: '#0067FF'}}>
      <View>
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
            paddingVertical: 30,
            height: height,
          }}>
          <View style={{ backgroundColor: '#F0F0F0', borderRadius: 10, marginHorizontal: 10}}>
            <Text> </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 5,
              }}>
              <View style={{width: width / 2 }}>
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
                <Text style={{marginLeft: 20, color: 'gray'}}>1.38</Text>
              </View>
              <View style={{width: width / 2}}></View>
            </View>

         
              <CustomTable
                tableHeadItems={[
                  'Subject Code',
                  'Subject Title',
                  'Lec',
                  'Lab',
                  'Tuition Units',
                  'Credited Units',
                  'Section',
                  'Professor',
                  'Slots',
                  'Day',
                  'Time',
                  'Room',
                ]}
                widthArrItems={[
                  100, 300, 50, 50, 60, 60, 150, 150, 50, 50, 150, 150,
                ]}
                rowDataItems={TableItems}
              />

            <Text> </Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Grades;
