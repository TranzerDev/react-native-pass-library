import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import PassLibrary from 'react-native-pass-library';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={'Hello'}
        onPress={(_event) => console.log(`PassLibrary`, PassLibrary)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
