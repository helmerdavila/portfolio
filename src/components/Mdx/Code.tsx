import React, { useContext } from 'react';
import { Highlight, Prism, Language, themes } from 'prism-react-renderer';
import { ThemeContext } from '../Layout';

/* istanbul ignore next */
(typeof global !== 'undefined' ? global : window).Prism = Prism;

// await import('prismjs/components/prism-php');
await import('prismjs/components/prism-ruby');
await import('prismjs/components/prism-yaml');
await import('prismjs/components/prism-docker');
await import('prismjs/components/prism-bash');
await import('prismjs/components/prism-ignore');
await import('prismjs/components/prism-vim');
await import('prismjs/components/prism-json');
await import('prismjs/components/prism-nginx');

interface Props {
  children?: string;
  className?: string;
}

const Code = ({ children, className }: Props) => {
  const context = useContext(ThemeContext);
  const language = (className?.replace(/language-/, '') || '') as Language;

  return (
    <Highlight
      theme={context.isLightTheme === 'light' ? themes.github : themes.nightOwl}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded-xl block overflow-x-auto`}
          data-testid="code-highlight"
          style={{ ...style }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });

            return (
              <div key={index} {...lineProps} className="flex flex-row">
                <div className="select-none pr-3 w-8 text-slate-300 dark:text-slate-400">{index + 1}</div>
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
