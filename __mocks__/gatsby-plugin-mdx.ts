import React from 'react';

const mockMdxRenderer = ({ children }) => React.createElement('div', null, children);

module.exports = {
  MDXRenderer: jest.fn().mockImplementation(mockMdxRenderer),
};
