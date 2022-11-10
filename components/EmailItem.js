import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import EmailDetail from "./EmailDetail";

function EmailItem({
  id,
  emailTitle,
  emailFrom,
  emailBody,
}) {
  // const navigation = useNavigation();

  // function selectMealItemHandler() {
  //   navigation.navigate("MealDetail", {
  //     mealId: id,
  //   });
  // }

  return (
    <View style={styles.mealItem}>
      {/* <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        //onPress={selectMealItemHandler}
      > */}
      <View style={styles.innerContainer}>
        <View>
          {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
          <Text style={styles.title}>{emailTitle}</Text>
          <Text style={styles.emailFrom}>From: {emailFrom}</Text>
          <Text style={styles.body}>{emailBody}</Text>
        </View>
        {/* <MealDetail /> */}
      </View>
      {/* </Pressable> */}
      <EmailDetail />
    </View>
  );
}

export default EmailItem;

const styles = StyleSheet.create({
  mealItem: {
    //marginTop: 10,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#3e04c3",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 20,
    margin: 8,
    color: "white",
  },
  body: {
    fontSize: 14,
    margin: 8,
    fontWeight: "500",
    color: "white",
  },
  emailFrom: {
    fontSize: 14,
    margin: 8,
    color: "white",
  },
});
