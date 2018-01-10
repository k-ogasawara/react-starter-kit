/* eslint-disable no-shadow */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <article className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
        </div>
      </article>
    );
  }
}

export default withStyles(s)(Home);
