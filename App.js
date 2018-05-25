import React from 'react';
import { Provider } from 'react-redux'

import { RootNavigation } from './src/navigations'
import configureStore from './src/config/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <RootNavigation />
      </Provider>
    )
  }
}