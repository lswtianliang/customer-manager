/**
 * 入口模块
 * 初始化store
 */
import { ConfigProvider } from '@seeyon/syf-components';
import { Provider } from 'react-redux';
import store from './common/configStore';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';

// 初始化语言
import './locales/i18n';

import '@seeyon/syf-components/dist/index.css';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

function renderIndependent() {
  if ((window as any).isIndependent) {
    MOUNT_NODE && ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    ReactDOM.render(
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>,
      MOUNT_NODE,
    );
  }
}

renderIndependent();
