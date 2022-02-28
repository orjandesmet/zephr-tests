import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

const ReactComment = dynamic(
  () => import('./ReactComment'),
  { ssr: false }
)

export default function NYTimes({children}) {
  const [onClient, setOnClient] = useState(false);

  useEffect(() => {
    setOnClient(true);
  }, []);

  if (!onClient) {
    return (
      <div className='ABC'>
        <ReactComment text="NYTimes: Start SSR" />
        {children}
        <ReactComment text="NYTimes: End SSR" />
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
  <!-- NYTimes: Start -->
  ${renderedChildren}
  <!-- NYTimes: Stop -->
  `}}></div>
}
