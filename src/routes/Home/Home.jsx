/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { getStream } from '../../actions/stream';
import s from './Home.scss';

class Home extends React.Component {
  static propTypes = {
    stream: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    getStream: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getStream } = this.props;
    getStream(428);
  }

  render() {
    const { stream } = this.props;
    return (
      <article className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          <h2>{stream.id || 0}</h2>
        </div>
      </article>
    );
  }
}

const mapState = state => ({
  stream: state.stream.stream,
});

const mapDispatch = {
  getStream,
};

export default connect(mapState, mapDispatch)(withStyles(s)(Home));
