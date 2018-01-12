import { combineReducers } from 'redux';
import stream from './stream';

export default function createRootReducer() {
  return combineReducers({
    stream,
  });
}
