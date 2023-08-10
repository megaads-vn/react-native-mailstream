# react-native-mailstream

MailStream library for React Native

## Installation

```sh
npm install react-native-mailstream
```

## Usage

```js
import { MailStream } from 'react-native-mailstream';

// ...
const APP_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxx';
const mailStreaming = new MailStream(APP_TOKEN);
mailStreaming.sendRquest({
    event: 'login',
    receiver_properties: {
        email: 'myname@example.com',
    }
})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
