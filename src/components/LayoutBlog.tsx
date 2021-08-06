import React from 'react';
import HeaderBlog from './Layouts/HeaderBlog';

const LayoutBlog = ({ children }: { children: any }) => {
  return (
    <>
      <HeaderBlog />
      <div className="pt-20 bg-gray-200 h-full">{children}</div>
    </>
  );
};

export default LayoutBlog;
