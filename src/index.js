import { NativeModules, Platform } from 'react-native';

const { RNPassLibrary } = NativeModules;

const library = {
    getRemotePKPassAndPresentPKPassView: async (url) => {
        if (!Platform.OS === 'ios') {
            throw 'This library is not supported on Android'
        }
        return await RNPassLibrary.getRemotePKPassAndPresentPKPassView(url)
    }
}
export default library;
