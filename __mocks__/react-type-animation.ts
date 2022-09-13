import React from 'react';
import { v4 as uuid } from 'uuid';

export const TypeAnimation = jest
  .fn()
  .mockImplementation((props) => props.sequence.map((step) => React.createElement('div', { key: uuid() }, step)));
