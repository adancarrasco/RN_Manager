import React from 'react';
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';

import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends React.Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  renderPickerItems() {
    const items = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return items.map((item, index) => (
      <Picker.Item label={item} value={item} />
    ));
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={value => {
              this.props.employeeUpdate({prop: 'name', value});
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => {
              this.props.employeeUpdate({prop: 'phone', value});
            }}
          />
        </CardSection>

        <CardSection style={styles.pickerContainerStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({prop: 'shift', value})
            }
            style={styles.pickerComponentStyle}
          >
            {this.renderPickerItems()}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerContainerStyle: {
    flexDirection: 'column',
  },
  pickerComponentStyle: {
    flex: 1,
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = state => {
  // employeeForm comes from the key assigned in the combineReducers in reducers/index.js
  const {name, phone, shift} = state.employeeForm;
  return {
    name,
    phone,
    shift,
  };
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate
);
