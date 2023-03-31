/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text variant="displayLarge">olá mundo!!</Text>
        <Text variant="displaySmall">Gabriel gabriel</Text>
      </View>
    </PaperProvider>
  );
}

export default App;
