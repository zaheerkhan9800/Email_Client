//import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

function EmailGrid({ title, color, onPress, emailTitle, emailBody }) {
  //const navigation = useNavigation()

  //If we want to use "navigation" prop which is only available to the Screens registered under
  // stack navigation then we can use this process to get it to use on all components/screens registered or not
  return (
    // < style={[styles.gridItem, { backgroundColor: color }]}>
      
      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        {/* <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View> */}

        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {emailTitle.slice(0,75)}...
            </Text>
            <Text style={styles.textBase}>{emailBody.slice(0, 45)}...</Text>
          </View>
        </View>
      </Pressable>
      
  );
}
export default EmailGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 3,
  },
  button: {
    flex: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  expenseItem: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: "#3e04c3",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  textBase: {
    color: "#e4d9fd",
  },
  description: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 100,
  },
  amount: {
    color: "#3e04c3",
    fontWeight: "bold",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
