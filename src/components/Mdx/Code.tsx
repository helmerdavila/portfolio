import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwlNight from 'prism-react-renderer/themes/nightOwlLight';

export default ({ children, className }) => {
  const language = className.replace(/language-/, '') || '';

  return (
    <Highlight {...defaultProps} theme={nightOwlNight} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
