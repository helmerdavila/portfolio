import React from 'react';
import { customRender } from '../../utils/testing';
import Code from './Code';
import { vi } from 'vitest';

it('renders edge cases: dark mode, no language', () => {
  const code = `sample`;
  const { getByTestId } = customRender(<Code className="">{code}</Code>, {
    themeContextProps: { isLightTheme: false, toggleTheme: vi.fn() },
  });

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
});

it('renders php code without problems', () => {
  const code = `
   <?php

   echo "This is code from PHP";
  `;
  const { getByTestId } = customRender(React.createElement(Code, { className: 'language-php' }, code));

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
  expect(preBlock).toHaveClass('prism-code');
  expect(preBlock).toHaveClass('language-php');
});

it('renders ruby code without problems', () => {
  const code = `
  puts "This is code from Ruby"
  `;
  const { getByTestId } = customRender(React.createElement(Code, { className: 'language-ruby' }, code));

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
  expect(preBlock).toHaveClass('prism-code');
  expect(preBlock).toHaveClass('language-ruby');
});

it('renders yaml code without problems', () => {
  const code = `
  hello: this
  code: from
  `;
  const { getByTestId } = customRender(React.createElement(Code, { className: 'language-yaml' }, code));

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
  expect(preBlock).toHaveClass('prism-code');
  expect(preBlock).toHaveClass('language-yaml');
});

it('renders docker code without problems', () => {
  const code = `
  FROM ubuntu-demo
  `;
  const { getByTestId } = customRender(React.createElement(Code, { className: 'language-docker' }, code));

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
  expect(preBlock).toHaveClass('prism-code');
  expect(preBlock).toHaveClass('language-docker');
});

it('renders bash code without problems', () => {
  const code = `
  echo "Demo"
  `;
  const { getByTestId } = customRender(React.createElement(Code, { className: 'language-bash' }, code));

  const preBlock = getByTestId('code-highlight');

  expect(preBlock).toBeInTheDocument();
  expect(preBlock).toHaveClass('prism-code');
  expect(preBlock).toHaveClass('language-bash');
});
