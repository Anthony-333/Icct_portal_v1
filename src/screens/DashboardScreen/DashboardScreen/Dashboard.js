import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';

import CustomAvatar from '../../../components/CustomAvatar';
import CustomSlider from '../../../components/CustomSlider';

import DropShadow from 'react-native-drop-shadow';

import {AntDesign} from '@expo/vector-icons';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const Dashboard = () => {
  return (
    <ScrollView style={{backgroundColor: 'white', height: height}}>
      <View>
        <View>
          <View
            style={{
              backgroundColor: '#0067FF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 40,
              alignItems: 'center',
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Hi, User!
            </Text>
            <CustomAvatar />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 10,
              height: 230,
            }}>
            <CustomSlider />
          </View>

          <View
            style={{
              width: width,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'red',
                borderRadius: 10,
                alignItems: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Reminder: Outstanding balance as of May 20, 2022
              </Text>
            </View>
          </View>

          <DropShadow
            style={{
              shadowColor: '#171717',
              shadowOffset: {width: 3, height: 3},
              shadowOpacity: 0.2,
              shadowRadius: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 30,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: width / 1.1,
                height: 200,
                borderRadius: 20,
                padding: 20,
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, marginVertical: 5}}>
                School Year:{' '}
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#0067FF'}}>
                  2021-2022
                </Text>
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, marginVertical: 5}}>
                Term:{' '}
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#0067FF'}}>
                  Second
                </Text>
              </Text>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'red',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    padding: 5,
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  0.00
                </Text>
              </View>
            </View>
          </DropShadow>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
