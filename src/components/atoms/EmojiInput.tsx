import React, { FC } from 'react';
import Emoji from './Emoji';

interface IEmojiInputProps {
  label: string,
  symbol: string,
  type: string,
  isSelected: boolean,
  onChange: (e: any, params: any) => void
}

const EmojiInput: FC<IEmojiInputProps> = ({ label, symbol, type, onChange, isSelected }) => {
  const handleChange = (e: any) => {
    onChange(e, {label, symbol, type})
  }
    
  return (  
    <div className={`a-emojiinput`}>
      <label htmlFor={label}>
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
        id={label} 
      />
    </div>
  );
}

export default EmojiInput;