import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';


const CustomPicker = ({dropDownItem, placeholder, search}) => {
  const [value, setValue] = useState(null);

  const data = dropDownItem;

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={search}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value) || console.log(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CustomPicker;
// import { View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import React from "react";

// import { Dimensions } from "react-native";

// var width = Dimensions.get("window").width; //full width

// const CustomPicker = ({ selectedValue, onValueChange, enabled, item }) => {
//   const data = item;

//   return (
//     <View
//       style={{
//         borderWidth: 1,
//         borderColor: enabled ? "#000" : "#9F9F9F",
//         borderRadius: 10,
//       }}
//     >
//       <Picker
//         style={{
//           height: 50,
//           width: width / 1.1,
//           color: enabled ? "#000" : "#909090",
//         }}
//         enabled={enabled}
//         selectedValue={selectedValue}
//         onValueChange={onValueChange}
//       >
//         {data.map((data) => {
//           return (
//             <Picker.Item
//               key={data.id}
//               label={data.label}
//               value={data.value}
//             />
//           );
//         })}
//       </Picker>

//     </View>
//   );
// };

// export default CustomPicker;
