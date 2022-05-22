import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import CollapsibleView from "../components/@eliav2/react-native-collapsible-view";

import { useNavigation } from "@react-navigation/native";

import ProgramInformation from "../components/Step1/ProgramInformation";
import PersonalInformation from "../components/Step1/PersonalInformation";
import HomeAddress from "../components/Step1/HomeAddress";
import ProvincialAddress from "../components/Step1/ProvincialAddress";

import { MaterialIcons } from "@expo/vector-icons";

const Step2 = () => {
  const navigation = useNavigation();

  const [controlledValue, setControlledValue] = useState(false);

  return (
    <View
      style={{ height: "100%", paddingTop: 20, backgroundColor: "#0067FF" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <MaterialIcons name="keyboard-backspace" size={30} color="white" />
        </TouchableOpacity>

        <Text style={{ fontSize: 23, fontWeight: "bold", color: "#ffffff" }}>
          Profile
        </Text>
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color="transparent"
        />
      </View>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: 30,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            height: "100%",
            alignItems: "flex-start",
            marginVertical: 15,
            marginHorizontal: 15,
          }}
        >
          <CollapsibleView
            style={{ borderWidth: 0 }}
            title={
              <Text
                style={{
                  color: "#000000",
                  fontSize: 20,
                  alignSelf: "flex-start",
                }}
              >
                Educational Information
              </Text>
            }
            initExpanded
          >
            <ProgramInformation />
          </CollapsibleView>

        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Step2;
