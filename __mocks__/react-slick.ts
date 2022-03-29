import React from 'react';

export default jest.fn().mockImplementation(({ children }) => React.createElement('div', null, children));
