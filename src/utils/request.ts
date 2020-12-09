/**
 * 封装一层apollo和ajax, 提供统一的api前缀
 * 后续工具库升级会提供配置统一前缀的方法
 */

import { apollo, ajax } from '@seeyon/syf-tools';

const { apolloRegister, apolloQuery } = apollo;
const { get: ajaxGet, post: ajaxPost } = ajax;

const apiPrefix = '/service/demo-customer/';
const graphqlUrl = '/service/graphql/';

apolloRegister({ url: graphqlUrl });

export { apolloQuery };

export function get(url: string, params: AjaxOptions = {}) {
  return ajaxGet(`${apiPrefix}${url}`, params);
}

export function post(url: string, payload: Record<string, any>, params: AjaxOptions = {}) {
  return ajaxPost(`${apiPrefix}${url}`, payload, params);
}
