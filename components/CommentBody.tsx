import React from 'react';

interface CommentBodyProps {
  rawHtml?: string; 
}

export default function CommentBody({ rawHtml }: CommentBodyProps): React.JSX.Element {
  const htmlPorDefecto = "<p>Texto con <strong>formato</strong> y estilo.</p>";
  const htmlContenido = rawHtml || htmlPorDefecto;

  return (
    <div 
      className="comment-content" 
      dangerouslySetInnerHTML={{ __html: htmlContenido }} 
    />
  );
}
