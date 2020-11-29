import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PassLibrary from 'react-native-pass-library';

export default function App() {
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    PassLibrary.multiply(3, 7).then(setResult);
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
