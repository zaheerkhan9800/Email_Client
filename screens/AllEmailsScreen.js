import { StyleSheet, FlatList, Pressable, Image} from "react-native";
import EmailGrid from "../components/EmailGrid";
import { EMAILS } from "../data/dummy-data";

function AllEmailsScreen({navigation}) {

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("EmailsScreen", {categoryId: itemData.item.id});
    }

    return (
      <EmailGrid
        emailTitle = {itemData.item.emailTitle}
        emailBody = {itemData.item.emailBody}
        onPress={pressHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />

      <Pressable
        style={styles.composeContainer}
        onPress={() => navigation.navigate('Compose') }
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSVOVENW8AVVBfzIXrny-ioWzAVUVn23WZ4Gz73xM7l3tPzIx2FkyN8nFrp8IpbQBOqM&usqp=CAU",
          }}
          style={styles.floatingButtonStyle}
        />
      </Pressable>
    </>
  );
}
export default AllEmailsScreen;
const styles = StyleSheet.create({
  composeContainer: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    backgroundColor:'#f1f1f1',
    borderRadius: 50,
    borderWidth: 1,
    

  },
});

