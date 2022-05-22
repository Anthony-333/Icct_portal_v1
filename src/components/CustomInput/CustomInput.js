import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType,
  leftIcon,
  rightIcon,
  onFocus,
}) => {
  const [onFocusInput, setOnFocusInput] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {
                borderColor: onFocusInput
                  ? '#0067FF'
                  : '#e8e8e8' && error
                  ? 'red'
                  : '#e8e8e8',
              },
              // { borderColor: error ? "red" : "#e8e8e8" },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{paddingRight: 5}}>{leftIcon}</View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={() => setOnFocusInput(false) && onBlur}
                onFocus={() => setOnFocusInput(true)}
                placeholder={placeholder}
                style={styles.Input}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
              />
            </View>

            <View
              style={{position: 'absolute', right: 0, backgroundColor: '#fff'}}>
              {rightIcon}
            </View>
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderBottomWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 5,

    marginVertical: 5,

    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  Input: {
    height: 40,
    fontSize: 17,
    flex: 1,
  },
});

export default CustomInput;

// import React, {useState} from 'react';
// import {View, Text, TextInput, StyleSheet} from 'react-native';
// import {Controller} from 'react-hook-form';

// const CustomInput = ({
//   control,
//   name,
//   rules = {},
//   placeholder,
//   secureTextEntry,
//   keyboardType,
//   leftIcon,
//   rightIcon,
//   onFocus,
// }) => {
//   const [onFocusInput, setOnFocusInput] = useState(false);

// return (
//   <Controller
//     control={control}
//     name={name}
//     rules={rules}
//     render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
//       <>
//         <View
//           style={[
//             styles.container,
//             {
//               borderColor: onFocusInput
//                 ? '#0067FF'
//                 : '#e8e8e8' && error
//                 ? 'red'
//                 : '#e8e8e8',
//             },
//             // { borderColor: error ? "red" : "#e8e8e8" },
//           ]}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <View style={{paddingRight: 5}}>{leftIcon}</View>
//             <TextInput
//               value={value}
//               onChangeText={onChange}
//               onBlur={() => setOnFocusInput(false) && onBlur}
//               onFocus={() => setOnFocusInput(true)}
//               placeholder={placeholder}
//               style={styles.Input}
//               secureTextEntry={secureTextEntry}
//               keyboardType={keyboardType}
//             />
//           </View>

//           <View
//             style={{position: 'absolute', right: 0, backgroundColor: '#fff'}}>
//             {rightIcon}
//           </View>
//         </View>
//         {error && (
//           <Text style={{color: 'red', alignSelf: 'stretch'}}>
//             {error.message || 'Error'}
//           </Text>
//         )}
//       </>
//     )}
//   />
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     width: '100%',

//     borderBottomWidth: 1,
//     borderRadius: 5,

//     paddingHorizontal: 5,

//     marginVertical: 5,

//     flexDirection: 'row',
//     alignItems: 'center',

//     justifyContent: 'space-between',
//   },
//   Input: {
//     height: 40,
//     fontSize: 17,
//     flex: 1,
//   },
// });

// export default CustomInput;
