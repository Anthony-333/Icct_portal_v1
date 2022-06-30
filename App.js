import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
  Image,
  Dimensions,
} from 'react-native';
import Navigation from './src/navigation';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
import React, {useState, useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

Amplify.configure(config);

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  const slides = [
    {
      key: 1,
      title: 'Welcome to Icct Student Portal',
      description:
        'Student portal is your gateway to your education here at ICCT!',
      image: require('./src/components/Images/welcome.png'),
    },
    {
      key: 2,
      title: 'Take your dream course',
      description: 'A wide range of available courses here.',
      image: require('./src/components/Images/manage.png'),
    },
    {
      key: 3,
      title: 'Learn everything from scratch',
      description: 'Begin your journey now!',
      image: require('./src/components/Images/learn.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: height,
          width: width,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              height: 300,
              width: 300,
              marginVertical: 20,
              textAlign: 'center',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#0067FF',
              fontWeight: 'bold',
              fontSize: 40,
              width: width,
              textAlign: 'center',
              marginVertical: 20,
            }}>
            {item.title}
          </Text>
          <Text style={{fontSize: 20, width: width, textAlign: 'center'}}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const buttonLabel = label => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            color: '#0067FF',
            fontWeight: '600',
            fontSize: 20,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    isAppFirstLaunched != null && (
      <View style={styles.root}>
        <StatusBar style="auto" />

        {isAppFirstLaunched ? (
          <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            onDone={() => setIsAppFirstLaunched(false)}
            activeDotStyle={{
              backgroundColor: '#0067FF',
              width: 30,
            }}
            renderNextButton={() => buttonLabel('Next')}
            renderSkipButton={() => buttonLabel('Skip')}
            renderDoneButton={() => buttonLabel('Done')}
          />
        ) : (
          <Navigation />
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
