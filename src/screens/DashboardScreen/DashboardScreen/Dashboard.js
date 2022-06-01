import {
  View,
  Text,
  Dimensions,
  ScrollView,
  BackHandler,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import CustomAvatar from '../../../components/CustomAvatar';
import CustomSlider from '../../../components/CustomSlider';

import DropShadow from 'react-native-drop-shadow';

import {AntDesign} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const Dashboard = () => {
  const navigation = useNavigation();
  // const backAction = () => {
  //   Alert.alert('Hold on!', 'Are you sure you want to exit??', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     {text: 'YES', onPress: () => BackHandler.exitApp()},
  //   ]);
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', backAction);
  // }, []);
  return (
    <ScrollView style={{backgroundColor: 'white', height: height}}>
      <View>
        <View>
          <View
            style={{
              backgroundColor: '#0067FF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Hi, User!
            </Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <CustomAvatar />
            </TouchableOpacity>
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
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 5,
                  color: 'gray',
                }}>
                School Year:{' '}
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#0067FF'}}>
                  2021-2022
                </Text>
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 5,
                  color: 'gray',
                }}>
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
