import {View, StyleSheet, FlatList} from 'react-native';
import EmailItem from './EmailItem';


function EmailList({displayedEmails}){
function renderMealItem(itemData) {
     const item = itemData.item;

     const emailItemProps = {
       id: item.id,
       emailFrom: item.emailFrom,
       emailTitle: item.emailTitle,
       emailBody: item.emailBody,
     };
     return <EmailItem {...emailItemProps} />;
   }

   return (
     <View style={styles.container}>
       <FlatList
         data={displayedEmails}
         keyExtractor={(item) => item.id}
         renderItem={renderMealItem}
       />
     </View>
   );
}
export default EmailList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 4,
  },
  textBase: {
    color: "white",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

});