import { combineReducers } from 'redux';
import RankingsReducer from './RankingsReducer';
import GalleryReducer from './GalleryReducer';

export default combineReducers({
  rankings: RankingsReducer,
  gallery: GalleryReducer
});
