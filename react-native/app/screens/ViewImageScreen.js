import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";

function ViewImageScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          uri={
            "https://pbs.twimg.com/profile_images/1671903338646974465/7F1X-E0b_400x400.jpg"
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
