import styles from './index.module.scss';
import { ArticleComponents } from '@nx-demo/article-components';
import { types } from '@nx-demo/types';
import { MyNewComponent } from '@nx-demo/article-components';
import { useState } from 'react';
import EsiComment from '../components/EsiComment';
import ReactComment from '../components/ReactComment';
import {HTMLComment} from '../components/HtmlComment';
import NYTimes from '../components/NYTimes';

export function Index() {
  console.log(types());
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log('clicked');
    setCounter((ct) => ct + 1);
  }

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <ArticleComponents />
      <MyNewComponent />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome site 👋
            </h1>
          </div>
          {/* <HTMLComment text="AAAAA" /> */}
          {/* <ReactComment text="BBBBB" /> */}
          <div data-comment="My comment"/>


          <NYTimes >
            <button onClick={handleClick} type="button">Click me!</button>
            <p>Clicked {counter} times</p>
          </NYTimes>
        </div>
      </div>
    </div>
  );
}

export default Index;
