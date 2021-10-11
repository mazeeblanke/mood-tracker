import React, { ReactElement, FC } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import initStore from 'store';

function render(
  ui: ReactElement,
  {
    store = initStore(),
    ...renderOptions
  } = {},
) {
  const Wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
