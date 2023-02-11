import React from 'react';
import { v4 as uuid } from 'uuid';
import { vi } from 'vitest';

export const TypeAnimation = vi
  .fn()
  .mockImplementation((props) => props.sequence.map((step) => React.createElement('div', { key: uuid() }, step)));
