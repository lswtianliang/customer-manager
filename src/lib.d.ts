import * as ReactLib from 'react';
import * as ReactDOMLib from 'react-dom';
import * as ReduxLib from 'redux';
import * as ReactReduxLib from 'react-redux';
import * as ReactRouterDOMLib from 'react-router-dom';

declare global {
  const React: typeof ReactLib;
  const ReactDOM: typeof ReactDOMLib;
  const Redux: typeof ReduxLib;
  const ReactRedux: typeof ReactReduxLib;
  const ReactRouterDOM: typeof ReactRouterDOMLib;
  const cls: (data: any) => string;
}

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}
