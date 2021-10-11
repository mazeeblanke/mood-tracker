import React, {
  FC, useState, ChangeEvent, MouseEvent
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { IAddMoodAction } from 'types';
import { EMOJIS } from 'utils/constants';
import Button from 'components/atoms/Button';
import EmojiInput from 'components/atoms/EmojiInput';
import { addMood } from 'store/moods/moods.actions';

const largeCat = require('assets/images/cat-large.png');

interface IMoodSelectorProps extends IAddMoodAction {
}

const MoodSelector: FC<IMoodSelectorProps> = ({ addMood }) => {
  const [mood, setMood] = useState({
    label: '',
    symbol: '',
    type: '',
    id: ''
  });

  const handleInputChange = (e: ChangeEvent, params: any): void => {
    setMood({
      ...params,
      id: uuidv4()
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    addMood(mood)
    setMood({
      label: '',
      symbol: '',
      type: '',
      id: ''
    })
  };

  return (
    <div className="o-moodselector">
      <form className="o-moodselector__form">
        <img src={largeCat} alt="large cat" />
        <h4 className="o-moodselector__title">What is your cat’s current mood?</h4>
        <div className="o-moodselector__input-container">
          {
            EMOJIS.map(({ label, symbol, type}) => (
              <EmojiInput 
                isSelected={label === mood.label} 
                onChange={handleInputChange} 
                key={label} 
                label={label} 
                symbol={symbol} 
                type={type} 
              />
            ))
          }
        </div>
        <p className={`o-moodselector__status o-moodselector__status--${mood.type}`}>
          { mood.label ? `Cat was ${mood.label}` : '' }
        </p> 
        <Button onClick={handleSubmit} type="submit" disabled={!mood.label} text="Save mood" />
      </form>
    </div>
  );
};

export default connect(
  null,
  {
    addMood
  }
)(MoodSelector);
