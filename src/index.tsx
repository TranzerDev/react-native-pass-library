import { NativeModules } from 'react-native';

type PassLibraryType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PassLibrary } = NativeModules;

export default PassLibrary as PassLibraryType;
