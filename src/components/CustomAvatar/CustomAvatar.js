import {View, Text} from 'react-native';
import React from 'react';

import UserAvatar from 'react-native-user-avatar';

const CustomAvatar = () => {
  return (
    <View>
      <UserAvatar
        size={50}
        name="john anthony"
        bgColors={['#A200DB']}
      />
    </View>
  );
};

export default CustomAvatar;
