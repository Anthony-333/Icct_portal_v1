import {View, Text} from 'react-native';
import React from 'react';

import UserAvatar from 'react-native-user-avatar';

const CustomAvatar = () => {
  return (
    <View>
      <UserAvatar
        size={50}
        name="Avishay Bar"
        src="https://res.cloudinary.com/dzhvw7vxn/image/upload/v1653972425/Icct-portal/user_1_ebh02d.png"
      />
    </View>
  );
};

export default CustomAvatar;
