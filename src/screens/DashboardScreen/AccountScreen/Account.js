import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import AccountItem from './AccountItem';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

const Account = () => {
  return (
    <ScrollView style={{backgroundColor: '#0067FF'}}>
      <View style={{height: 'auto'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
              marginVertical: 30,
            }}>
            Account
          </Text>
        </View>

        <ScrollView
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 20,
            height: 'auto',
            minHeight: height,
          }}>
          <Text style={{textAlign: 'center', color: 'red'}}>
            This is just a dummy data
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 5,
            }}>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Name
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>
                Dela Cruz, Juan
              </Text>
            </View>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Student Number
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>20196370</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 5,
            }}>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Course
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>
                (BSIT) BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
              </Text>
            </View>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Year Level
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>Third Year</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 5,
            }}>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Curriculum Year
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>2021</Text>
            </View>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Section
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>OLCA333A026</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 5,
            }}>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Status
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>
                Continuing (Regular) ( 15 Unit(s) Allowed )
              </Text>
            </View>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                Academic Term
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>Third</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 5,
            }}>
            <View style={{width: width / 2}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#0067FF',
                }}>
                School Year
              </Text>
              <Text style={{marginLeft: 20, color: 'gray'}}>2021-2022</Text>
            </View>
            <View style={{width: width / 2}}></View>
          </View>
          <AccountItem />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Account;
