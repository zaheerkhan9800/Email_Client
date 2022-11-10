import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";

function EmailDetail() {
  //   function selectMealItemHandler() {
  //   Alert.alert("This is a dummy button.", "This Button does not perform any action.");
  // }

  const navigation = useNavigation();
  function pressHandler(){
    navigation.navigate("My Mails");
  }
  return (
    <View style={styles.details}>
      <View style={styles.textCenter}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={pressHandler}
        >
          <Text style={styles.detailItem}>Reply</Text>
        </Pressable>
      </View>
      <View style={styles.textCenter}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={pressHandler}
        >
          <Text style={styles.detailItem}>Reply All</Text>
        </Pressable>
      </View>
      <View style={styles.textCenter}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={pressHandler}
        >
          <Text style={styles.detailItem}>Forward</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default EmailDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 2,
    fontSize: 16,
    backgroundColor: "#512ff9",
    padding: 15,
    textAlign: "center",
    borderRadius: 6,
    color: "white",
    fontWeight: "500",
    elevation: 4,
    borderColor: "white",
    borderWidth: 1,
  },
  textCenter: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
