import home from '@components/home/redux/reducers';
import { combineReducers } from 'redux';

// 将多个reducer合并到一起(当前demo只有一个reducer)
export default combineReducers({
  home,
});
