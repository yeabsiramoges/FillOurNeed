import { StyleSheet } from 'react-native';

import EditCommunity from '../components/EditCommunity';
import { Text, View } from '../components/Themed';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditCommunity path="/screens/CommunityScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
