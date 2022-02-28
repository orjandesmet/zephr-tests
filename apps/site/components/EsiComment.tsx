import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

const HTMLComment = dynamic(
  () => import('./ReactComment'),
  { ssr: false }
)

export default function EsiComment({ children }) {
  if (typeof window !== "undefined") {
    return (
      <div className='ABC'>
        <HTMLComment text="ReactComment: Start 1" />
        {children}
        <HTMLComment text="ReactComment: End" />
      </div>
    );
  }

  const renderedChildren = ReactDOMServer.renderToStaticMarkup(
    <>
      {children}
    </>
  );

  return <div className='ABC' dangerouslySetInnerHTML={{
    __html: `
  <!-- ESI: Start -->
  ${renderedChildren}
  <!-- ESI: End -->
  `}}></div>
}
