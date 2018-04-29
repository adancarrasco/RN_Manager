import React from 'react';
import {View} from 'react-native';

const CardSection = props => {
  // The style property can receive an array and the argument most to the right
  // will override the style most to the left
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export {CardSection};
