import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Rating } from 'react-native-ratings';
import { barometer } from 'react-native-sensors';

interface Props {}
interface State {
  descriptions: Array<String>,
  severity: number,
  subscription: Object | null,
  pressure: number,
}

export default class AddItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      severity: 2,
      descriptions: ['Best', 'No Pain', 'Some Pain', 'Moderate Pain', 'A Lot of Pain', 'Worst'],
      subscription: null,
      pressure: 0.0
    };
  }

  componentDidMount() {
    const subscription = barometer.subscribe(({pressure}) => {
      console.log(`Pressure is ${pressure}`);
      this.setState({pressure});
    });
    this.setState({subscription});
  }

  componentWillUnmount() {

  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.ratingLabel}>{this.state.descriptions[this.state.severity]}</Text>
        <Rating
          type="star"
          imageSize={40}
          onFinishRating={(rating)=> this.setState({severity: rating})}
        />
        <View style={styles.pressureContainer}>
          <Text>Current Pressure: {this.state.pressure.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={() => console.log("Canceld")} />
          <Button title="Ok" onPress={() => console.log("Okayed")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CC88',
  },
  ratingLabel: {
    fontSize: 20,
  },
  pressureContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});
