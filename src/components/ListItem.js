import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.library.title}</Text>
      </CardSection>
    )
  }
};
