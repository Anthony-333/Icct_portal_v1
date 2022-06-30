import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const SliderItem = ({item, index}) => {
  return (
    <DropShadow style={styles.shadowProp}>
      <View
        style={{
          width: ITEM_WIDTH,
          height: 220,
        }}>
        <Image
          source={item.imgUrl}
          style={styles.image}
        />

        {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
      </View>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "white",
  //     borderRadius: 8,
  //     width: ITEM_WIDTH,
  //     paddingBottom: 40,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.29,
  //   shadowRadius: 4.65,
  //   elevation: 7,
  //   },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  image: {
    width: ITEM_WIDTH,
    height: 220,
    borderRadius: 10,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default SliderItem;

// import { View, Text, Dimensions } from "react-native";
// import React from "react";

// var height = Dimensions.get("window").height; //full width
// var width = Dimensions.get("window").width; //full width

// const SliderItem = () => {
//   return (
//     <View style={{ flexDirection: "row", justifyContent: "center" }}>
//       <View style={{ backgroundColor: "red", width: width / 1.2 }}>
//         <Text>SliderItem</Text>
//       </View>
//     </View>
//   );
// };

// export default SliderItem;
