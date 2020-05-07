import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import Router from "./routing";
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { StatusBar, View } from 'react-native'
import theme from 'src/style/theme/default'

import BottomPopup from './component/common/BottomPopup'
import Common from './component/common/Common'
import DarkTheme from './component/common/Statusbar'
import ErrorHandler from './component/common/ErrorHandler'

class Root extends PureComponent {
  render() {
    let storeDefaults = storeConfig();
    return (
      <Provider store={storeDefaults.store}>
        <PersistGate loading={null} persistor={storeDefaults.persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            <DarkTheme />

            <Router />

            {/* <ErrorHandler /> */}
            <BottomPopup />
            <Common />
          </SafeAreaView>

        </PersistGate>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
