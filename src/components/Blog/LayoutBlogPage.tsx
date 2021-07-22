import React from 'react';
import LayoutBlog from '../LayoutBlog';

const LayoutBlogPage = ({ children, pathContext }) => {
  return (
    <LayoutBlog>
      <div className="container max-w-4xl py-5 mx-auto">
        <div className="bg-white border-2 shadow-sm">
          <img
            className=""
            src={pathContext.frontmatter?.imageCover ?? ''}
            alt={pathContext.frontmatter?.imageAlt ?? ''}
          />
          <div className="p-12">{children}</div>
        </div>
      </div>
    </LayoutBlog>
  );
};

export default LayoutBlogPage;

