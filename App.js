import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

import reducers from './src/reducers';
import {firebaseConfig} from './src/config';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
