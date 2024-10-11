import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Icon name="person" size={24} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E3CFAF',
  },
  icon: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 4,
  },
});

export default CustomHeader;