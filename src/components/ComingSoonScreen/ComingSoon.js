import {View, Text, Image} from 'react-native';
import React from 'react';

const ComingSoon = () => {
  return (
    <View>
      <Image
        source={require('./image/working.png')}
        style={{
          height: 200,
          width: 400,
          resizeMode: 'contain',
        }}
      />
      <Text style={{fontSize: 20, fontWeight: 'normal', textAlign: 'center'}}>
        Devs are working...
      </Text>
    </View>
  );
};

export default ComingSoon;
