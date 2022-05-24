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
                addStyle={{
                  backgroundColor: '#F0F0F0',
                }}
                placeholder={'2021-2022'}
                dropDownItem={[{label: '2021-2022', value: '2021-2022'}]}
                disable={true}
              />
            </View>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 20}}>Term</Text>
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
              <Text style={{marginLeft: 20}}>Parent Section</Text>
              <CustomPicker
                addStyle={{
                  backgroundColor: 'white',
                }}
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
              <Text style={{marginLeft: 20}}>Year Level</Text>
              <CustomPicker
                addStyle={{
                  backgroundColor: 'white',
                }}
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
            <Text style={{marginLeft: 20}}>Course</Text>
            <CustomPicker
              addStyle={{
                backgroundColor: 'white',
              }}
              search={true}
              placeholder={'Select Course'}
              dropDownItem={[
                {
                  label: 'ABA - ASSOCIATE IN BUSINESS ADMINISTRATION ',
                  value: 'ABA - ASSOCIATE IN BUSINESS ADMINISTRATION ',
                },
                {
                  label: 'AB_COMM - BACHELOR OF ARTS IN COMMUNICATION ',
                  value: 'AB_COMM - BACHELOR OF ARTS IN COMMUNICATION  ',
                },
                {
                  label: 'AB_ENGLISH - BACHELOR OF ARTS IN ENGLISH ',
                  value: 'AB_ENGLISH - BACHELOR OF ARTS IN ENGLISH ',
                },
                {
                  label: 'ACT - ASSOCIATE IN COMPUTER TECHNOLOGY ',
                  value: 'ACT - ASSOCIATE IN COMPUTER TECHNOLOGY ',
                },
                {
                  label: 'BECEd - BACHELOR IN EARLY CHILDHOOD EDUCATION ',
                  value: 'BECEd - BACHELOR IN EARLY CHILDHOOD EDUCATION ',
                },
                {
                  label:
                    'BEED - BACHELOR IN ELEMENTARY EDUCATION  (Major in  Early Childhood Education)',
                  value:
                    'BEED - BACHELOR IN ELEMENTARY EDUCATION  (Major in  Early Childhood Education)',
                },
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
