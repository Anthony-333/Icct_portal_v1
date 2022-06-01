import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, BackHandler, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import Dashboard from '../../screens/DashboardScreen/DashboardScreen';
import Account from '../../screens/DashboardScreen/AccountScreen';
import Calendar from '../../screens/DashboardScreen/CalendarScreen';
import Grades from '../../screens/DashboardScreen/GradesScreen';
import Registration from '../../screens/DashboardScreen/RegistrationScreen';
import Schedule from '../../screens/DashboardScreen/ScheduleScreen';
import SectionOffering from '../../screens/DashboardScreen/SectionOfferingScreen';
import BottomTabNavigator from '../bottomTabNavigation';

import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

import {Auth} from 'aws-amplify';

import ProfileHeader from './ProfileHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const CustomDrawerContent = props => {
  const [onFocus1, setonFocus1] = useState(false);
  const [onFocus2, setonFocus2] = useState(false);
  const [onFocus3, setonFocus3] = useState(false);
  const [onFocus4, setonFocus4] = useState(false);
  const [onFocus5, setonFocus5] = useState(false);
  const [onFocus6, setonFocus6] = useState(false);
  const [onFocus7, setonFocus7] = useState(false);
  const [onFocus8, setonFocus8] = useState(false);

  const setDrawerActive = () => {
    setonFocus1(true) ||
      setonFocus2(false) ||
      setonFocus3(false) ||
      setonFocus4(false) ||
      setonFocus5(false) ||
      setonFocus6(false) ||
      setonFocus7(false) ||
      setonFocus8(false);
  };
  useEffect(() => {
    setDrawerActive();
  }, []);

  return (
    <>
      <DrawerContentScrollView scrollEnabled={false}>
        <DrawerContentScrollView
          style={{
            marginTop: -5,
            backgroundColor: '#0067FF',
            borderBottomRightRadius: 50,
          }}>
          <ProfileHeader />
        </DrawerContentScrollView>

        <DrawerContentScrollView
          style={{
            backgroundColor: '#0067FF',
          }}>
          <DrawerContentScrollView
            style={{
              backgroundColor: '#fff',
              height: height,
              marginTop: -4,
              marginLeft: 10,
              paddingVertical: 15,
              borderTopLeftRadius: 50,
            }}>
            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Dashboard
                </Text>
              )}
              focused={onFocus1}
              onPress={() =>
                props.navigation.navigate('Dashboard') ||
                setonFocus1(true) ||
                setonFocus2(false) ||
                setonFocus3(false) ||
                setonFocus4(false) ||
                setonFocus5(false) ||
                setonFocus6(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/dashboard/dashboard-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/dashboard/dashboard-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />

            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Section Offering
                </Text>
              )}
              focused={onFocus2}
              onPress={() =>
                props.navigation.navigate('SectionOffering') ||
                setonFocus2(true) ||
                setonFocus1(false) ||
                setonFocus3(false) ||
                setonFocus4(false) ||
                setonFocus5(false) ||
                setonFocus6(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/SectionOffering/bookmark-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/SectionOffering/bookmark-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />
            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Registration
                </Text>
              )}
              focused={onFocus3}
              onPress={() =>
                props.navigation.navigate('Registration') ||
                setonFocus3(true) ||
                setonFocus1(false) ||
                setonFocus2(false) ||
                setonFocus4(false) ||
                setonFocus5(false) ||
                setonFocus6(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/Registration/register-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/Registration/register-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />
            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Schedule
                </Text>
              )}
              focused={onFocus4}
              onPress={() =>
                props.navigation.navigate('Schedule') ||
                setonFocus4(true) ||
                setonFocus1(false) ||
                setonFocus2(false) ||
                setonFocus3(false) ||
                setonFocus5(false) ||
                setonFocus6(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/Schedule/schedule-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/Schedule/schedule-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />

            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Grades
                </Text>
              )}
              focused={onFocus5}
              onPress={() =>
                props.navigation.navigate('Grades') ||
                setonFocus5(true) ||
                setonFocus1(false) ||
                setonFocus2(false) ||
                setonFocus3(false) ||
                setonFocus4(false) ||
                setonFocus6(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/Grade/Grade-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/Grade/Grade-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />
            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Account
                </Text>
              )}
              focused={onFocus6}
              onPress={() =>
                props.navigation.navigate('Account') ||
                setonFocus6(true) ||
                setonFocus1(false) ||
                setonFocus2(false) ||
                setonFocus3(false) ||
                setonFocus4(false) ||
                setonFocus5(false) ||
                setonFocus7(false) ||
                setonFocus8(false)
              }
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/Account/Account-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/Account/Account-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />
            {/* <DrawerItem
          label="Calendar"
          onPress={() => props.navigation.navigate("Calendar")}
        /> */}

            <DrawerItem
              style={{borderRadius: 10}}
              label={({focused, color}) => (
                <Text
                  style={{
                    color: focused ? color : '#A9A9A9',
                    marginLeft: -15,
                  }}>
                  Logout
                </Text>
              )}
              focused={onFocus7}
              onPress={() => Auth.signOut()}
              icon={({focused, size, color}) =>
                focused ? (
                  <Image
                    source={require('./images/Logout/Logout-solid.png')}
                    style={{width: 20, height: 20, tintColor: '#0067FF'}}
                  />
                ) : (
                  <Image
                    source={require('./images/Logout/Logout-outline.png')}
                    style={{width: 20, height: 20, tintColor: '#A9A9A9'}}
                  />
                )
              }
            />
          </DrawerContentScrollView>
        </DrawerContentScrollView>
      </DrawerContentScrollView>
    </>
  );
};

const index = () => {
  const Drawer = createDrawerNavigator();

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      useLegacyImplementation
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Grades" component={Grades} />
      <Drawer.Screen name="Registration" component={Registration} />
      <Drawer.Screen name="Schedule" component={Schedule} />
      <Drawer.Screen name="SectionOffering" component={SectionOffering} />
      <Drawer.Screen
        name="Profile"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default index;