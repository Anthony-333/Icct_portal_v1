import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';

import CustomTable from '../../../components/CustomTable';
import TableItems from './tableItems';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Registration = () => {
  const ORF =
    'https://icctportal-storage04211-dev.s3.ap-southeast-1.amazonaws.com/icct-file/Official+registration+and+Assessment+Form+SAMPLE+ONLY.pdf';
  const Tentative =
    'https://icctportal-storage04211-dev.s3.ap-southeast-1.amazonaws.com/icct-file/Official+registration+and+Assessment+Form+SAMPLE+ONLY.pdf';
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
            Registration
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
                Name
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>
                Dela Cruz, Juan
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
                Student Number
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>20196370</Text>
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
                (BSIT) BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
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
                Curriculum Year
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>2021</Text>
            </View>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Section
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>OLCA333A026</Text>
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
                Status
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>
                Continuing (Regular) ( 15 Unit(s) Allowed )
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
                Academic Term
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>Third</Text>
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
                School Year
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>2021-2022</Text>
            </View>
            <View style={{width: width / 2}}></View>
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL(Tentative)}
            style={{
              height: 'auto',
              backgroundColor: '#0067FF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              marginVertical: 5,
            }}>
            <Text style={{color: '#fff', paddingVertical: 10}}>
              Tentative and Assessment Form
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(ORF)}
            style={{
              height: 'auto',
              backgroundColor: '#0067FF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              marginVertical: 5,
            }}>
            <Text style={{color: '#fff', paddingVertical: 10}}>
              Official Registration And Assessment Form
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 'auto',
              backgroundColor: '#0067FF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              marginVertical: 5,
            }}>
            <Text style={{color: '#fff', paddingVertical: 10}}>Assessment</Text>
          </TouchableOpacity>

          <View style={{}}>
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
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Registration;
