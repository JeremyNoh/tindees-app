import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { BLUEVIOLET, PURPLE, GREEN, YELLOW, RED } from "../../utils/colors";

export const CardEvent = ({ props, onPress }) => {
  let { name, startDate, category, zip_code } = props;

  let [day, hours] = startDate.split(" ");
  return (
    <View
      style={{
        alignItems: "center"
      }}
    >
      <View
        style={{
          marginTop: 20,
          width: "90%",
          justifyContent: "center",
          elevation: 4,
          shadowOffset: { width: 5, height: 5 },
          shadowColor: "grey",
          shadowOpacity: 0.5,
          shadowRadius: 10
        }}
      >
        <ListItem
          friction={90}
          tension={100}
          activeScale={0.95}
          title={name.toUpperCase()}
          linearGradientProps={{
            colors: ["grey", "grey"],
            start: [1, 0],
            end: [0.2, 0]
          }}
          titleStyle={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          }}
          subtitleStyle={{ color: "white" }}
          subtitle={
            <View>
              <View
                style={{
                  alignItems: "center",
                  height: 3,
                  borderRadius: 20,
                  width: "100%",
                  marginVertical: 10,
                  backgroundColor: "white"
                }}
              />
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>{day}</Text>
                <Text style={styles.ratingText}>{zip_code || 77090}</Text>
              </View>
              <View style={styles.alignElement}>
                <Text style={styles.ratingText}>{category} </Text>
              </View>
            </View>
          }
          containerStyle={{
            borderRadius: 10
          }}
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 100,
    marginTop: 30,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  subtitleView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  alignElement: {
    alignItems: "center"
  },
  ratingText: {
    fontWeight: "bold",
    color: "white"
  }
});

export default CardEvent;

// colors Good
// #5359af
