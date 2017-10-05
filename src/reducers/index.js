import { combineReducers } from 'redux';
import RankingsReducer from './RankingsReducer';
import GalleryReducer from './GalleryReducer';
import ArticlesReducer from './ArticlesReducer';
import ArticleReducer from './ArticleReducer';
import NotificationsReducer from './NotificationsReducer';

export default combineReducers({
  rankings: RankingsReducer,
  gallery: GalleryReducer,
  articles: ArticlesReducer,
  article: ArticleReducer,
  notifications: NotificationsReducer
});
