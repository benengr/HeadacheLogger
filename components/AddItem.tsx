import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

interface Props {}
export default class AddItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CC88',
  },
});
