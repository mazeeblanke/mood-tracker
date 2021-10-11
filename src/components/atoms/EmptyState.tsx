import React, { FC } from 'react';

const blacknWhiteCat = require('assets/images/cat-blacknwhite.png');

interface IEmptyStateProps {
  text: string
}

const EmptyState: FC<IEmptyStateProps> = ({text}) => (
  <div className="a-emptystate">
    <img src={blacknWhiteCat} alt="black and white cat" />
    <p>{text}</p>
  </div>
);

export default EmptyState;