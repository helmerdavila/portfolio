import React from 'react';

interface TypingMock extends jest.Mock {
  Reset: jest.Mock;
}

const Reset = jest.fn().mockImplementation(({ children }) => React.createElement('div', null, children));
const Typing = jest.fn().mockImplementation(({ children }) => React.createElement('div', null, children));

(Typing as TypingMock).Reset = Reset;

export default Typing;
