import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from 'components/atoms/Button';

const text = 'happy yourself'

test('renders without crashing', () => {
  render(<Button type="submit" disabled={false} onClick={() => {}} text={text}></Button>);
  const buttonText = screen.getByText(new RegExp(text, 'i'));
  expect(buttonText).toBeInTheDocument();
});
