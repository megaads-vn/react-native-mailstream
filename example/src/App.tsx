import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { MailStream } from 'react-native-mailstream';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    let mailStream = new MailStream('ahihi');
    mailStream.sendRequest({
      event: 'login',
      receiver_properties: {
        email: 'kieutuananh1995@gmail.com',
      },
    });
    setResult('OK');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
