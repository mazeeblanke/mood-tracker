import React, { ChangeEvent, FC } from 'react';
import { IEmoji } from 'types';
import Emoji from './Emoji';

interface IEmojiInputProps {
  label: string,
  symbol: string,
  type: string,
  isSelected: boolean,
  onChange: (e: ChangeEvent, params: IEmoji) => void
}

const EmojiInput: FC<IEmojiInputProps> = ({ label, symbol, type, onChange, isSelected }) => {
  const handleChange = (e: ChangeEvent) => {
    onChange(e, {label, symbol, type})
  }
    
  return (  
    <div className={`a-emojiinput`}>
      <label htmlFor={type}>
        <Emoji 
          label={label} 
          symbol={symbol} 
          type={isSelected ? type : 'default' } 
        />
      </label>
      <input 
        checked={isSelected} 
        onChange={handleChange} 
        name="mood" 
        type="radio" 
        id={type} 
      />
    </div>
  );
}

export default EmojiInput;