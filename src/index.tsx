import { NativeModules, Platform } from 'react-native';

type PassLibraryType = {
  getRemotePKPassAndPresentPKPassView: (url: string) => Promise<void>;
};

const { RNPassLibrary } = NativeModules;

const Package: PassLibraryType = {
  getRemotePKPassAndPresentPKPassView: (url) => {
    if (Platform.OS !== 'ios') throw 'This library is not supported on Android';
    return RNPassLibrary.getRemotePKPassAndPresentPKPassView(url);
  },
};

export const getRemotePKPassAndPresentPKPassView =
  Package.getRemotePKPassAndPresentPKPassView;

export default Package;
