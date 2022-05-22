import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import CustomPicker from '../../../../../../components/CustomPicker';

var width = Dimensions.get('window').width; //full width

const ProgramInformation = () => {
  return (
    <View>
      <View style={{width: width}}>
        <Text style={{marginLeft: 15}}>Classification</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Academic Program</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Course (First Choice)</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Course (Second Choice)</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Course (Third Choice)</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Year Level</Text>
        <CustomPicker
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
      <View>
        <Text style={{marginLeft: 15}}>Preferred Session</Text>
        <CustomPicker
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
  );
};

export default ProgramInformation;
