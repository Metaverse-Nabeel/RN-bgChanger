import React, { Fragment, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [randomBg, setRandomBg] = useState('')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBg(color);
  }

  return (
    <Fragment>
      <StatusBar backgroundColor={randomBg}/>
      <View style={[styles.container, { backgroundColor: randomBg }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.bgBtn}>
            <Text style={styles.bgBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 12
  },
  bgBtnTxt: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  }
});

export default App;
