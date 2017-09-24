import { combineReducers } from 'redux';
import RankingsReducer from './RankingsReducer';

export default combineReducers({
  rankings: RankingsReducer
});
