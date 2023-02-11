import React from 'react';
import { vi } from 'vitest';

const mockMdxRenderer = ({ children }) => React.createElement('div', null, children);

export const MDXProvider = vi.fn().mockImplementation(mockMdxRenderer);
