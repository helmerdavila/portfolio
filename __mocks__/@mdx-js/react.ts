import React from 'react';

const mockMdxRenderer = ({ children }) => React.createElement('div', null, children);

module.exports = {
  MDXProvider: jest.fn().mockImplementation(mockMdxRenderer),
};
