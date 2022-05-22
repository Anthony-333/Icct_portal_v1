import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import CustomPicker from '../../../components/CustomPicker';
import CustomTable from '../../../components/CustomTable';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const SectionOffering = () => {
  return (
    <View style={{backgroundColor: '#0067FF'}}>
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
              <Text style={{marginLeft: 20}}>School Year</Text>
              <CustomPicker
                placeholder={'Select Year'}
                dropDownItem={[
                  {label: 'Item 1', value: '1'},
                  {label: 'Item 2', value: '2'},
                  {label: 'Item 3', value: '3'},
                  {label: 'Item 4', value: '4'},
                  {label: 'Item 5', value: '5'},
                  {label: 'Item 6', value: '6'},
                  {label: 'Item 7', value: '7'},
                  {label: 'Item 8', value: '8'},
                ]}
              />
            </View>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20}}>Term</Text>
              <CustomPicker
                placeholder={'Select Term'}
                dropDownItem={[
                  {label: 'Item 1', value: '1'},
                  {label: 'Item 2', value: '2'},
                  {label: 'Item 3', value: '3'},
                  {label: 'Item 4', value: '4'},
                  {label: 'Item 5', value: '5'},
                  {label: 'Item 6', value: '6'},
                  {label: 'Item 7', value: '7'},
                  {label: 'Item 8', value: '8'},
                ]}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20}}>Parent Section</Text>
              <CustomPicker
                placeholder={'Select Section'}
                dropDownItem={[
                  {label: 'Item 1', value: '1'},
                  {label: 'Item 2', value: '2'},
                  {label: 'Item 3', value: '3'},
                  {label: 'Item 4', value: '4'},
                  {label: 'Item 5', value: '5'},
                  {label: 'Item 6', value: '6'},
                  {label: 'Item 7', value: '7'},
                  {label: 'Item 8', value: '8'},
                ]}
              />
            </View>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20}}>Year Level</Text>
              <CustomPicker
                placeholder={'Select Year'}
                dropDownItem={[
                  {label: 'Item 1', value: '1'},
                  {label: 'Item 2', value: '2'},
                  {label: 'Item 3', value: '3'},
                  {label: 'Item 4', value: '4'},
                  {label: 'Item 5', value: '5'},
                  {label: 'Item 6', value: '6'},
                  {label: 'Item 7', value: '7'},
                  {label: 'Item 8', value: '8'},
                ]}
              />
            </View>
          </View>

          <View style={{width: width}}>
            <Text style={{marginLeft: 20}}>Course</Text>
            <CustomPicker
              search={true}
              placeholder={'Select Course'}
              dropDownItem={[
                {label: 'Item 1', value: '1'},
                {label: 'Item 2', value: '2'},
                {label: 'Item 3', value: '3'},
                {label: 'Item 4', value: '4'},
                {label: 'Item 5', value: '5'},
                {label: 'Item 6', value: '6'},
                {label: 'Item 7', value: '7'},
                {label: 'Item 8', value: '8'},
              ]}
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

          <View style={{paddingHorizontal: 20, paddingTop: 20}}>
            <Text style={{paddingBottom: 10}}>Section: OLCA333A026</Text>
            <CustomTable />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SectionOffering;
