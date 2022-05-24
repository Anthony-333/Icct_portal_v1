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
          placeholder={'- status -'}
          disable={true}
          dropDownItem={[{label: 'Item 1', value: '1'}]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Academic Program</Text>
        <CustomPicker
          placeholder={'Batchelor Programs'}
          disable={true}
          dropDownItem={[{label: 'Item 1', value: '1'}]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Course (First Choice)</Text>
        <CustomPicker
          placeholder={'BSIT - BACHELOR OF SCIENCE IN ...'}
          disable={true}
          dropDownItem={[{label: 'Item 1', value: '1'}]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Course (Second Choice)</Text>
        <CustomPicker
          placeholder={'- Second Choice -'}
          disable={true}
          dropDownItem={[{label: 'Item 1', value: '1'}]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Course (Third Choice)</Text>
        <CustomPicker
          placeholder={'- Third Choice -'}
          disable={true}
          dropDownItem={[{label: 'Item 1', value: '1'}]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Year Level</Text>
        <CustomPicker
         placeholder={'Select Year '}
          dropDownItem={[
            {label: 'First Year', value: 'First Year'},
          ]}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15}}>Preferred Session</Text>
        <CustomPicker
          placeholder={'- Select Session -'}
          disable={true}
          dropDownItem={[
            {label: 'Item 1', value: '1'},
         
          ]}
        />
      </View>
    </View>
  );
};

export default ProgramInformation;
