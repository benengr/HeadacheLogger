import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';

interface Props {}
interface State {
  descriptions: Array<String>,
  severity: number,
}

export default class AddItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      severity: 2,
      descriptions: ['Best', 'No Pain', 'Some Pain', 'Moderate Pain', 'A Lot of Pain', 'Worst'],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.ratingLabel}>{this.state.descriptions[this.state.severity]}</Text>
        <Rating
          type="star"
          imageSize={40}
          onFinishRating={(rating)=> this.setState({severity: rating})}
        />
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
  ratingLabel: {
    fontSize: 20
  }
});
