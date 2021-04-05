import { NativeModules } from 'react-native';

const { RNPassLibrary } = NativeModules;

const library = {
    getRemotePKPassAndPresentPKPassView: async (url) => {
        return await RNPassLibrary.getRemotePKPassAndPresentPKPassView(url)
    }
}

export default library;
