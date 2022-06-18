import React, { useState, useEffect } from "react";

import { View, Button } from "react-native";
import styles from "../stylesheet";

import { Overlay } from "react-native-elements";
import { ManageTeam } from "../components/ManageTeam";

import { useTasks } from "../../providers/TasksProvider";
import { TaskItem } from "../components/TaskItem";
import { AddTask } from "../components/AddTask";

export function MissionsView({ navigation, route }) {
  const { name } = route.params;

  const [overlayVisible, setOverlayVisible] = useState(false);

  const { missions, createMissions } = useTasks();
  useEffect(() => {
    navigation.setOptions({
      headerRight: function Header() {
        return <AddTask createMissions={createMissions} />;
      },
      title: `${name}'s Tasks`,
    });
  }, []);

  return (
    <View>
      {missions.map((mission) =>
        missions ? <TaskItem key={`${mission._id}`} mission={mission} /> : null
      )}

      {name === "My Community" ? (
        <>
          <View style={styles.manageTeamButtonContainer}>
            <Button
              title="Manage Community"
              onPress={() => setOverlayVisible(true)}
            />
          </View>
          <Overlay
            isVisible={overlayVisible}
            onBackdropPress={() => setOverlayVisible(false)}
          >
            <ManageTeam />
          </Overlay>
        </>
      ) : null}
    </View>
  );
}
