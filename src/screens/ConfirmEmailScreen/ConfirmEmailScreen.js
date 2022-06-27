import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";



var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full width

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);

  const route = useRoute();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate("SignIn", { username });
    } catch (e) {
      Alert.alert("Error", e.message);
    }
    setLoading(false);
  };

  const onResendPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was re-sent to your email");
    } catch (e) {
      Alert.alert("Failed", "Email cannot be empty");
    }
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../../components/Images/confirm_email.png')}
          style={{
            paddingVertical: 20,
            height: 200,
            width: 200,
            resizeMode: "contain",
          }}
        />

        <Text style={styles.logo}>Confirm your email</Text>

        <CustomInput
          name="username"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is Required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />

        <CustomInput
          name="code"
          placeholder="confirmation code"
          control={control}
          rules={{
            required: "Confirmation code is Required",
          }}
        />

        <CustomButton
          text={
            loading ? (
              <View style={{ flexDirection: "row" }}>
                <ActivityIndicator size={20} color="#ffffff" />
                <Text
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  Loading...
                </Text>
              </View>
            ) : (
              "Confirm"
            )
          }
          onPress={handleSubmit(onConfirmPressed)}
        />

        <CustomButton
          text={
            loading ? (
              <View style={{ flexDirection: "row" }}>
                <ActivityIndicator size={20} color="#ffffff" />
                <Text
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  Loading...
                </Text>
              </View>
            ) : (
              "Resend Code"
            )
          }
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    height: height,
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "black",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
