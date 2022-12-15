import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const DatePicker = ({ value, handleValueChange }) => {
  return <Datepicker primaryColor={'blue'} value={value} onChange={handleValueChange} showShortcuts={true} />;
};
export default DatePicker;
