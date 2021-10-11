import React, { FC, MouseEvent } from 'react';

interface IButton {
  text: string,
  type: "button" | "submit" | "reset" | undefined,
  disabled: boolean,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button : FC<IButton> = ({ text, disabled, type, onClick }) => (
  <button 
    onClick={onClick}
    type={type}
    disabled={disabled} 
    className={`a-button ${ disabled ? 'a-button--disabled' : '' }`}
  >{text}</button>
);

export default Button;
