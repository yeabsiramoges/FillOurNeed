import React from "react";
import { View } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { ListItem } from "react-native-elements";

export function CommunityView({ navigation }) {
  const { communityData } = useAuth();

  // the onClickProject navigates to the missions list associated with a certain communtiy
  // and community partition value
  const onClickCommunity = async (community) => {
    navigation.navigate("Task List", {
      name: community.name,
      projectPartition: community.partition,
    });
  };

  return (
    <View>
      {communityData.map((community) => (
        <View key={community.name}>
          <ListItem
            onPress={() => onClickCommunity(community)}
            bottomDivider
            key={community.name}
          >
            <ListItem.Content>
              <ListItem.Title>
                {community.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      ))}
    </View>
  );
}
