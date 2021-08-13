import React, { useContext } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwlNight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { ThemeContext } from '../Layout';

export default ({ children, className }) => {
  const context = useContext(ThemeContext);
  const language = className.replace(/language-/, '') || '';

  return (
    <Highlight
      {...defaultProps}
      theme={context.isLightTheme ? nightOwlNight : nightOwl}
      code={children}
      language={language}
    >
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

