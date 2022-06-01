import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import CustomPicker from '../../../components/CustomPicker';
import CustomTable from '../../../components/CustomTable';
import Section from './courseItem';
import TableItems from './tableItems';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const SectionOffering = () => {
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
            Section Offering
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
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20, color: 'gray'}}>School Year</Text>
              <CustomPicker
                placeholder={'2021-2022'}
                dropDownItem={[{label: '2021-2022', value: '2021-2022'}]}
                disable={true}
              />
            </View>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20, color: 'gray'}}>Term</Text>
              <CustomPicker
                addStyle={{
                  backgroundColor: '#F0F0F0',
                }}
                disable={true}
                placeholder={'Select Term'}
                dropDownItem={[{label: 'Third', value: 'Third'}]}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20, color: 'gray'}}>Parent Section</Text>
              <CustomPicker
                placeholder={'Select Section'}
                dropDownItem={[
                  {label: 'OLCA33A026', value: '1OLCA33A026'},
                  {label: 'OLCA33E040', value: 'OLCA33AE40'},
                  {label: 'OLCA33E041', value: 'OLCA33AE41'},
                  {label: 'OLCA33M016', value: 'OLCA33M016'},
                  {label: 'OLRS22', value: 'OLRS22'},
                  {label: 'OLRS27', value: 'OLRS27'},
                ]}
              />
            </View>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20, color: 'gray'}}>Year Level</Text>
              <CustomPicker
                placeholder={'Select Year'}
                dropDownItem={[
                  {label: 'First Year', value: 'First Year'},
                  {label: 'Second Year', value: 'Second Year'},
                  {label: 'Third Year', value: 'Third Year'},
                  {label: 'Fourth Year', value: 'Fourth Year'},
                ]}
              />
            </View>
          </View>

          <View style={{width: width}}>
            <Text style={{marginLeft: 20, color: 'gray'}}>Course</Text>
            <CustomPicker
              search={true}
              placeholder={'Select Course'}
              dropDownItem={Section}
            />
          </View>

          <View
            style={{
              width: width,
              height: 'auto',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                width: width / 2.3,
                height: 'auto',
                backgroundColor: '#0067FF',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', paddingVertical: 10}}>
                View Sections
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: width / 2.3,
                height: 'auto',
                backgroundColor: '#0067FF',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', paddingVertical: 10}}>
                View Open Subjects
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop: 20}}>
            <Text style={{marginLeft: 15, color: 'gray'}}>Section: OLCA333A026</Text>
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
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            More section will be added soon...
          </Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SectionOffering;
