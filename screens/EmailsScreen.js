import { useLayoutEffect } from "react";
import { StyleSheet} from "react-native";
import { EMAILS} from "../data/dummy-data";
import EmailList from "../components/EmailList";

function EmailsScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedEmails = EMAILS.filter((emailItem) => {
    return emailItem.id === catId;
  });

  useLayoutEffect(() => {
    const categoryTitle = EMAILS.find(
      (category) => category.id === catId
    ).emailTitle;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  
  return <EmailList displayedEmails={displayedEmails}/>
}
export default EmailsScreen;

