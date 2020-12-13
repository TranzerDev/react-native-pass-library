import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
// @ts-ignore
import RNPassLibrary from 'react-native-pass-library';

async function openPass(passUrl: string) {
  try {
    await RNPassLibrary.getRemotePKPassAndPresentPKPassView(passUrl);
  } catch (error) {
    console.error(error)
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={()=> {
        openPass('https://tranzer-wallet-passes-dev.s3.eu-central-1.amazonaws.com/passes/bb3e4650-7cc1-4aa9-8c0a-73af0ce8296d.pkpass')
      }} title={'Open Pass'} />
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
