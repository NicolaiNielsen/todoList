import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from './componenets/Tasks'

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's task */}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's task</Text>

      <View styles={styles.item}>
      {/*THIS IS WHERE THE TASKS WILL GO ! */}
      <Tasks text={'Task 1'}/>
      <Tasks text={'Task 2'}/>
      <Tasks text={'Task 3'}/>
      </View>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#207E11',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {},
});
