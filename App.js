import { StatusBar } from "expo-status-bar";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllEmailsScreen from "./screens/AllEmailsScreen";
import EmailsScreen from "./screens/EmailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ComposeScreen from "./screens/ComposeScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3e04c3" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#200364" },
        drawerActiveBackgroundColor: "#3e04c3",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="My Mails"
        component={AllEmailsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Compose"
        component={ComposeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#3e04c3" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#200364" },
            }}
          >
            <Stack.Screen
              name="AllMails"
              component={DrawerNavigator}
              options={{
                title: "My Mails",
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="EmailsScreen"
              component={EmailsScreen}
            />
          </Stack.Navigator>
          {/* <CategoriesScreen /> */}
        </NavigationContainer>
    </>
    // </View>
  );
}
