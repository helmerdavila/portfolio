import React, { useContext } from 'react';
import HeaderBlog from './Layouts/HeaderBlog';
import { ThemeContext } from './Layout';
import classNames from 'classnames';

const LayoutBlog = ({ children }: { children: unknown }): JSX.Element => {
  const context = useContext(ThemeContext);
  const pageBackground = { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme };

  return (
    <>
      <HeaderBlog />
      <div className={classNames(pageBackground, 'pt-20 h-full min-h-screen')}>{children}</div>
    </>
  );
};

export default LayoutBlog;

