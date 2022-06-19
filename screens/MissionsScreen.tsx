import { ScrollView, StyleSheet } from 'react-native';

import EditMissions from '../components/EditMissions';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Missions from '../components/Missions';

export default function MissionsScreen({ navigation }: RootTabScreenProps<'Missions'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
        <Missions missionText="Find my lost cat" serviceType="Business" description='I lost my cat in the Queen Anne area. He is a three month old ginger kitten'/>
      </ScrollView>
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
  scrollView: {
    width: '100%'
  }
});
