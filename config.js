const staticCustom = {
  // 本地环境使用的分支配置
  branch: 'master',
};
const configs = [
  {
    branch: 'master',
    // apiProxies是项目中调用后端API的开发环境和测试环境的目标地址，请根据项目需要修改其中的参数
    apiProxies: {
      '/service/graphql/': 'http://graphql.dev.seeyona9.com/',
    },

    // 需要额外注入的全局变量，代码中可直接通过 window.__ENVIRONMENT__.xx 使用
    externalEnvironment: {},
  },
];

//用于设置不同库之间的代码共享
const codeShare = {
  //remotes用来设置需要引用代码的库的信息，
  remotes: {},

  //exposes用来暴露需要共享给其它库使用的代码
  exposes: {},
};

module.exports = {
  staticCustom,
  configs,
};
