import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function ComposeScreen({navigation}) {
  return (
    <>
      <ScrollView>
        <View style={styles.formContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>From</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>To</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Subject</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Compose email</Text>
          </View>
          <TextInput style={styles.textInput1} multiline={true} />
        </View>
        <Pressable
          // onPress={() =>
          //   Alert.alert(
          //     "This is a dummy button.",
          //     "This Button does not perform any action."
          //   )
          // }
          onPress={() => navigation.navigate("My Mails")}
        >
          <View style={{ margin: 4 }}>
            <Text style={styles.detailItem}>Send</Text>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
}
export default ComposeScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  formContainer: {
    margin: 6,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#3e04c3",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    //textAlign: "center",
    fontSize: 16,
    margin: 8,
    color: "white",
  },
  textInput: {
    backgroundColor: "#f1f1f1",
    padding: 6,
    margin: 4,
    borderRadius: 6,
    //flex: 1,
    minWidth: 270,
  },
  textInput1: {
    backgroundColor: "#f1f1f1",
    padding: 6,
    margin: 4,
    borderRadius: 6,
    //flex: 1,
    //minHeight: 100,
    paddingBottom: 100,
  },
  detailItem: {
    marginHorizontal: 2,
    fontSize: 16,
    backgroundColor: "#5916f3",
    padding: 15,
    textAlign: "center",
    borderRadius: 6,
    color: "white",
    fontWeight: "500",
  },
});
