import React, { FC } from 'react';

interface IEmoji {
  label: string,
  symbol: string,
  type: string
}

const Emoji: FC<IEmoji> = ({ label, symbol, type }) => (
  <div className={`a-emoji a-emoji--${type}`}>
    <span
      className="a-emoji__"
      role="img"
      aria-label={label}
    >{symbol}</span>
  </div>
);

export default Emoji;