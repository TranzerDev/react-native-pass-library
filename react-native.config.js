module.exports = {
	dependencies: {
		'react-native-pass-library': {
			platforms: {
				ios: { podspecPath: `${__dirname}/react-native-pass-library.podspec` },
				android: {
					"packageImportPath": "import com.reactnativepasslibrary;",
					"packageInstance": "new RNPassLibraryPackage()"
				}
			}
		}
	}
};