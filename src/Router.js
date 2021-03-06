import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeForm();
            }}
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeForm"
            component={EmployeeCreate}
            title="Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
