/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>olá mundo!!</Text>
        <Text>Gabriel gabriel</Text>
      </View>
    </PaperProvider>
  );
}

export default App;
