# react-native-pass-library

A package to open pk pass on iOS

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](./LICENSE)

## Installation

Using either Yarn:

```bash
yarn add react-native-pass-library
```

Or npm:

```bash
npm install react-native-pass-library
```

## Usage

```js
import PassLibrary from 'react-native-pass-library';

// Wallet pass should present itself if the remote url contains a valid pkpass
await PassLibrary.getRemotePKPassAndPresentPKPassView('<pk-pass-url>');
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
