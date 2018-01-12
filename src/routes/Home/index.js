import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { getStreamOnServer } from '../../actions/stream';

async function action({ store }) {
  const stream = await store.dispatch(getStreamOnServer(428));
  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Layout>
        <Home stream={stream} />
      </Layout>
    ),
  };
}

export default action;
