import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = props => {
  const {children, corFundo} = props;
  return (
    <View style={[styles.button, {backgroundColor: corFundo}]}>
      <TouchableOpacity>
        <Text style={styles.title}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: 200,
    height: 60,
    borderRadius: 30,
    margin: 4,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
