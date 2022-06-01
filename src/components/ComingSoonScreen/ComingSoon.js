import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const ComingSoon = () => {
  return (
    <View
      style={{
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('./image/working.png')}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'normal',
          textAlign: 'center',
          color: 'gray',
        }}>
        Devs are working...
      </Text>
    </View>
  );
};

export default ComingSoon;
