import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./providers/AuthProvider";
import { TasksProvider } from "./providers/TasksProvider";

import { WelcomeView } from "./views/WelcomeView";
import { CommunityView } from "./views/CommunityView";
import { MissionsView } from "./views/MissionsView";

import { Logout } from "./components/Logout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeView}
            options={{ title: "FillOurNeed" }}
          />
          <Stack.Screen
            name="Community"
            component={CommunityView}
            title="CommunityView"
            headerBackTitle="log out"
            options={{
              headerLeft: function Header() {
                return <Logout />;
              },
            }}
          />
          <Stack.Screen name="Missions">
            {(props) => {
              const { navigation, route } = props;
              const { user, projectPartition } = route.params;
              return (
                <TasksProvider user={user} projectPartition={projectPartition}>
                  <MissionsView navigation={navigation} route={route} />
                </TasksProvider>
              );
            }}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
