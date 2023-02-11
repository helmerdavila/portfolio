import React from 'react';
import { vi } from 'vitest';

export default vi.fn().mockImplementation(({ children }) => React.createElement('div', null, children));
