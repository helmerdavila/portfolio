import React from 'react';
import { v4 as uuid } from 'uuid';

const mockHelmet = ({ htmlAttributes, titleTemplate, meta, ...props }) => {
  const children = [];
  children.push(
    React.createElement('input', {
      key: uuid(),
      className: 'mock-helmet-title-template',
      name: 'helmer-title-template',
      value: titleTemplate,
      onChange: jest.fn(),
    }),
  );
  for (const [key, value] of Object.entries(htmlAttributes)) {
    children.push(
      React.createElement('input', {
        key: uuid(),
        className: 'mock-helmet-attribute',
        name: key,
        value,
        onChange: jest.fn(),
      }),
    );
  }
  for (const [_, value] of Object.entries<{ name?: string; property?: string; content: string }>(meta)) {
    children.push(
      React.createElement('input', {
        key: _,
        className: 'mock-helmet-meta',
        name: value?.property ?? value?.name,
        value: value.content,
        onChange: jest.fn(),
      }),
    );
  }
  return React.createElement('div', { ...props, className: 'mock-helmet' }, children);
};

export default jest.fn().mockImplementation(mockHelmet);
