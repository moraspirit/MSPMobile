import { combineReducers } from 'redux';
import RankingsReducer from './RankingsReducer';
import GalleryReducer from './GalleryReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
  rankings: RankingsReducer,
  gallery: GalleryReducer,
  articles: ArticlesReducer
});
