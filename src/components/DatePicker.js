/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: this.props.data.inDate,
      selectedEndDate: this.props.data.outDate,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  updateDate(selectedStartDate, selectedEndDate) {
    this.props.data.setInDate(selectedStartDate);
    this.props.data.setOutDate(selectedEndDate);
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date();
    const maxDate = new Date(2025, 1, 1);
    // const startDate = selectedStartDate ? selectedStartDate.format('ll').toString() : '';
    // const endDate = selectedEndDate ? selectedEndDate.format('ll').toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />
        <Button
          onPress={() => {
            this.props.data.setModalVisible(false);
            this.updateDate(selectedStartDate, selectedEndDate);
          }}
          title="Save"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});
