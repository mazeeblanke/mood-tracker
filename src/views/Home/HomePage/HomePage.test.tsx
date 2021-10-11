import React from 'react';
import Home from 'views/Home/HomePage/HomePage';

import {
  render, fireEvent, screen, waitForElementToBeRemoved,
} from 'utils/test-utils';
import moods from 'utils/mocks/moods';
import { EMPTY_STATE_TEXT } from 'utils/constants';

let searchInput: HTMLElement;
let completedSelect: HTMLElement;

beforeEach(() => {
  render(<Home />);
});


it('shows no mood initially', async () => {
  expect(screen.getByText(new RegExp(EMPTY_STATE_TEXT, 'i'))).toBeInTheDocument();
});
