import React, { ReactElement, ReactNode } from 'react';
import HeaderBlog from './Layouts/HeaderBlog';

const LayoutBlog = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <>
      <HeaderBlog />
      <div className="pt-20 h-full min-h-screen bg-gray-200 dark:bg-gray-900">{children}</div>
    </>
  );
};

export default LayoutBlog;
