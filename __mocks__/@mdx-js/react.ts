import React from 'react';

const mockMdxRenderer = ({ children }) => React.createElement('div', null, children);

export const MDXProvider = jest.fn().mockImplementation(mockMdxRenderer);
