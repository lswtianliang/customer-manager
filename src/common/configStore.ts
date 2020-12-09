import { HomeState } from '@components/home/types';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

// 开启chrome redux-dev-tool调试
const extension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const devTool = extension ? extension() : (f: any) => f;

const enhancer = compose(applyMiddleware(thunk), devTool);

// 导出store及state类型
export interface StateType {
  home: HomeState;
}

export default createStore(reducers, enhancer);
