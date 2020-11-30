import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNPassLibrary from 'react-native-pass-library';

async function openPass(passUrl) {
  try {
    await RNPassLibrary.getRemotePKPassAndPresentPKPassView(passUrl);
  } catch (error) {
    console.log(error)
  }
}

export default function App() {
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    openPass('https://server.api/pass/123')
    setResult(2)
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
