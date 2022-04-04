import React from 'react';

const mockHelmet = ({ htmlAttributes, titleTemplate, meta, ...props }) => {
  const children = [];
  children.push(
    React.createElement('input', {
      className: 'mock-helmet-title-template',
      name: 'helmer-title-template',
      value: titleTemplate,
    }),
  );
  for (const [key, value] of Object.entries(htmlAttributes)) {
    children.push(React.createElement('input', { className: 'mock-helmet-attribute', name: key, value }));
  }
  for (const [_, value] of Object.entries<{ name?: string; property?: string; content: string }>(meta)) {
    children.push(
      React.createElement('input', {
        className: 'mock-helmet-meta',
        key: _,
        name: value?.property ?? value?.name,
        value: value.content,
      }),
    );
  }
  return React.createElement('div', { ...props, className: 'mock-helmet' }, children);
};

export default jest.fn().mockImplementation(mockHelmet);
