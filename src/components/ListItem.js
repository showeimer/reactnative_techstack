import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  };

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      )
    }
  };

  render() {

    const {titleStyle} = styles;
    const { title, id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectLibrary: selectLibrary
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
