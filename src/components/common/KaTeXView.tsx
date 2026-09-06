import React, { useMemo } from 'react';
import katex from 'katex';

interface KaTeXViewProps {
  content: string;
  className?: string;
}

export const KaTeXView: React.FC<KaTeXViewProps> = ({ content, className = '' }) => {
  const renderedHtml = useMemo(() => {
    try {
      return content.replace(/\$\$([^$]+)\$\$/g, (_, math) => {
        return katex.renderToString(math, { displayMode: true, throwOnError: false });
      }).replace(/\$([^$]+)\$/g, (_, math) => {
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      });
    } catch {
      return content;
    }
  }, [content]);

  return (
    <span
      className={`inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
