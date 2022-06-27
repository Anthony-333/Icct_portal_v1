import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import CollapsibleView from '../components/@eliav2/react-native-collapsible-view';

import {useNavigation} from '@react-navigation/native';

import ProgramInformation from '../components/Step1/ProgramInformation';
import PersonalInformation from '../components/Step1/PersonalInformation';
import HomeAddress from '../components/Step1/HomeAddress';

import LinearGradient from 'react-native-linear-gradient';

const Step1 = () => {
  const navigation = useNavigation();

  const [scroll, setScroll] = useState(0);

  return (
    <View style={{height: '100%', backgroundColor: '#0067FF'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <Text style={{fontSize: 23, fontWeight: 'bold', color: '#ffffff'}}>
          Profile
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 88,
          left: 0,
          right: 0,
          bottom: 0,
          height: 5,
          zIndex: 99999,
        }}>
        <LinearGradient
          colors={['white', 'transparent']}
          angleCenter={{x: 0.5, y: 0.5}}
          style={{
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}></LinearGradient>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: 30,
        }}>
        <View style={{marginTop: 20, marginBottom: 60}}>
          <ScrollView
            contentContainerStyle={{
              height: '100%',
              alignItems: 'flex-start',

              marginBottom: 50,
            }}>
            <CollapsibleView
              style={{borderWidth: 0}}
              title={
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 20,
                    alignSelf: 'flex-start',
                  }}>
                  Program Information
                </Text>
              }
              initExpanded>
              <ProgramInformation />
            </CollapsibleView>

            <CollapsibleView
              style={{borderWidth: 0}}
              title={
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 20,
                    alignSelf: 'flex-start',
                  }}>
                  Personal Information
                </Text>
              }
              initExpanded>
              <PersonalInformation />
            </CollapsibleView>

            <CollapsibleView
              style={{borderWidth: 0}}
              title={
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 20,
                    alignSelf: 'flex-start',
                  }}>
                  Home Address
                </Text>
              }
              initExpanded>
              <HomeAddress />
            </CollapsibleView>
            <TouchableOpacity
              onPress={() => navigation.navigate('Step2')}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                backgroundColor: '#0067FF',
                borderRadius: 5,
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                Next Step
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Step1;
