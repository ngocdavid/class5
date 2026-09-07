import React, { useMemo } from 'react';
import katex from 'katex';

interface KaTeXViewProps {
  content: string;
  className?: string;
}

export const KaTeXView: React.FC<KaTeXViewProps> = ({ content, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';
    try {
      if (content.includes('$')) {
        return content
          .replace(/\$\$([^$]+)\$\$/g, (_, math) => {
            return katex.renderToString(math, { displayMode: true, throwOnError: false });
          })
          .replace(/\$([^$]+)\$/g, (_, math) => {
            return katex.renderToString(math, { displayMode: false, throwOnError: false });
          });
      }

      // Tự động nhận diện công thức LaTeX (phân số, phép tính...) ngay cả khi không có dấu $
      if (/\\(frac|times|div|text|sqrt|pi|pm|approx|le|ge|neq|circ|cdot)/.test(content) || /^[\d\s]*\\frac/.test(content)) {
        return katex.renderToString(content, { displayMode: false, throwOnError: false });
      }

      return content;
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
