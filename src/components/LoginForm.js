import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardSection, Input, Button} from './common';
import {emailChanged, passwordChanged} from '../actions';

class LoginForm extends React.Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {auth} = state;
  return {
    email: auth.email,
    password: auth.password,
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(
  LoginForm
);
