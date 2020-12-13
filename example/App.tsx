import * as React from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
// @ts-ignore
import RNPassLibrary from 'react-native-pass-library';
import pkpass from "pkpass.json";

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
        console.log(Platform.OS)
        openPass(pkpass.test)
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
