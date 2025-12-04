import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import Calendar from 'react-calendar';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import 'react-calendar/dist/Calendar.css'; // Default Calendar styles
import STYLES from './App.scss'; // Your custom SCSS

const getClassName = cssModules(STYLES);

const App = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('Flight Schedule')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Welcome to React + Backpack
          </BpkText>
        </div>
      </header>
      
      <main className={getClassName('App__main')}>
        <BpkText tagName="p" className={getClassName('App__text')}>
          To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
        </BpkText>
        
        <div className={getClassName('App__calendar')}>
          <Calendar onChange={onChange} value={date} />
        </div>
        
        <BpkText tagName="p" className={getClassName('App__text')}>
          Selected Date: {date.toDateString()}
        </BpkText>

        {/* Button is now below the calendar */}
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;
