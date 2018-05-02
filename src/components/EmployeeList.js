import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';

import {employeesFetch} from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // Iterates over all the objects in the Firebase response and coverts it into an array as
  // [{shift: 'Monday', name: 'S', phone: '444-444-4444, id: '12asdl2312'}, {...}]
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
