import React, { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Layout, ThemeContext } from './Layout';

it('renders without issues', () => {
  const { queryByText } = render(
    <Layout pageContext={{ locale: 'en' }}>
      <h1>Sample text</h1>
    </Layout>,
  );

  expect(queryByText('Sample text')).toBeInTheDocument();
});

it('executes ThemeContextProvider without issues', () => {
  const getItemMock = jest.spyOn(window.localStorage.__proto__, 'getItem');
  const setItemMock = jest.spyOn(window.localStorage.__proto__, 'setItem');

  const SmallComponent = () => {
    const context = useContext(ThemeContext);

    return <button onClick={() => context.toggleTheme()}></button>;
  };

  const { queryByRole } = render(
    <Layout pageContext={{ locale: 'en' }}>
      <SmallComponent />
    </Layout>,
  );

  fireEvent.click(queryByRole('button'));

  expect(getItemMock).toHaveBeenCalled();
  expect(setItemMock).toHaveBeenCalled();
});
