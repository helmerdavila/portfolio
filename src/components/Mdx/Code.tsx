import React, { useContext } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwlNight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import Prism from 'prism-react-renderer/prism';
import { ThemeContext } from '../Layout';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-php');
require('prismjs/components/prism-ruby');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-docker');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-ignore');

const Code = ({ children, className }: { children: string; className: string }): JSX.Element => {
  const context = useContext(ThemeContext);
  const language = (className.replace(/language-/, '') || '') as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={context.isLightTheme ? nightOwlNight : nightOwl}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} overflow-x-auto`} style={{ ...style }}>
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

export default Code;
