import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import {firebaseConfig} from './src/config';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    // Second parameter is to initialize our store with default values
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
