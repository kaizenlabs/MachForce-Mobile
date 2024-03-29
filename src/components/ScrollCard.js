import React from 'react';
import { ScrollView, Platform } from 'react-native';

const ScrollCard = (props) => {
  return (
    <ScrollView style={styles.containerStyle}>
      {props.children}
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: Platform.OS === 'ios' ? 0 : 5,
    marginRight: Platform.OS === 'ios' ? 0 : 5,
    marginTop: 10
  }
};

export default ScrollCard;
