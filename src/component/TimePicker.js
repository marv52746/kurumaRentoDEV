//TimePicker
import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const TimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        mode="time"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default TimePicker;
