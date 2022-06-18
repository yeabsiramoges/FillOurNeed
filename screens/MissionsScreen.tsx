import { StyleSheet } from 'react-native';

import EditMissions from '../components/EditMissions';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MissionsScreen({ navigation }: RootTabScreenProps<'Missions'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditMissions path="/screens/MissionsScreen.tsx" />
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
