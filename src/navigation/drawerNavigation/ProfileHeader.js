import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import CustomAvatar from '../../components/CustomAvatar';

import {FontAwesome} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

const ProfileHeader = () => {
  const navigation = useNavigation();

  const onViewProfilePressed = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          margin: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <CustomAvatar />
        </View>

        <View>
          {/* <Text
            style={{ textDecorationLine: "underline" }}
            onPress={onViewProfilePressed}
          >
            View Profiles
          </Text> */}
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Student Name</Text>
          <Text style={{color: '#fff'}}>0000000</Text>
        </View>

        <TouchableOpacity onPress={onViewProfilePressed}>
          <AntDesign name="caretdown" size={24} color="#003583" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
