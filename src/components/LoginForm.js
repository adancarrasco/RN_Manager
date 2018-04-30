import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser, logoutUser} from '../actions';

class LoginForm extends React.Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  handleLoginClick() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  handleLogoutClick() {
    this.props.logoutUser();
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return <Button onPress={this.handleLoginClick.bind(this)}>Login</Button>;
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderLoginForm() {
    if (!this.props.user) {
      return (
        <View>
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

          {this.renderError()}
          <CardSection>{this.renderSpinner()}</CardSection>
        </View>
      );
    } else {
      return (
        <CardSection>
          <Button onPress={this.handleLogoutClick.bind(this)}>Logout</Button>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <Card>
        <View>
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

          {this.renderError()}
          <CardSection>{this.renderSpinner()}</CardSection>
        </View>
        );
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {auth} = state;
  return {
    email: auth.email,
    password: auth.password,
    loginUser: auth.loginUser,
    logoutUser: auth.logoutUser,
    error: auth.error,
    loading: auth.loading,
    user: auth.user,
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  logoutUser,
})(LoginForm);
