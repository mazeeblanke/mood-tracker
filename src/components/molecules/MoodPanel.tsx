import React, { FC } from 'react';
import Emoji from 'components/atoms/Emoji';

interface IMoodPanelProps {
  label: string, 
  symbol: string, 
  type: string,
  date: string,
  time: string
}

const MoodPanel: FC<IMoodPanelProps> = ({ label, symbol, type, date, time }) => {
  return (
    <div className={`m-moodpanel m-moodpanel--${type}`}>
      <Emoji label={label} symbol={symbol} type={type} />
      <div className="m-moodpanel__content">
        <h6 className="m-moodpanel__title">Cat was {label}</h6>
        <p className="m-moodpanel__body">{date} / {time}</p>
      </div>
    </div>
  );
};

export default MoodPanel;