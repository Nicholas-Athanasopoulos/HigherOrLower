import { StyleSheet, Text, View } from 'react-native';
// import Song from './Song'

export default function App() {

  var songList = []

  return (
    <View style={styles.container}>
      <Text>Higher or Lower</Text>
      <Text>Which song has the most streams?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
