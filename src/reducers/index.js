import { combineReducers } from 'redux';
import stream from './stream';
import categorySheet from './categorySheet';
import thumbnail from './thumbnail';

export default function createRootReducer() {
  return combineReducers({
    stream,
    categorySheet,
    thumbnail,
  });
}
