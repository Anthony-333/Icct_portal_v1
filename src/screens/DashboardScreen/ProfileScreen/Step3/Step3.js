import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import CollapsibleView from '../components/@eliav2/react-native-collapsible-view';

import {useNavigation} from '@react-navigation/native';

import ProgramInformation from '../components/Step1/ProgramInformation';
import PersonalInformation from '../components/Step1/PersonalInformation';
import HomeAddress from '../components/Step1/HomeAddress';
import ComingSoon from '../../../../components/ComingSoonScreen/ComingSoon';

import {MaterialIcons} from '@expo/vector-icons';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Step3 = () => {
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
      <ScrollView
        style={{
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: 30,
        }}>
        <View style={{marginTop: 20,}}>
          <ScrollView
            contentContainerStyle={{
              height: '100%',
              alignItems: 'flex-start',

              marginBottom: 50,
            }}>
            <View style={{flex: 1, justifyContent: 'center', width: width}}>
              
              <ComingSoon />
            </View>

            {/* <CollapsibleView
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
            </CollapsibleView> */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Step3;
