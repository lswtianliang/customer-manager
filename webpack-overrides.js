module.exports = {
  /**
   * 固定回调，在这里重写webpack的配置
   * @param {*} config webpack的配置,可在此基础上进行修改
   * @param {*} env 环境变了，development｜production
   * @return {*} 必须返回修改后的config
   */
  webpackOverride: function (config, env) {
    return config;
  },

  /**
   * 固定回调，在这里重写devServer的配置
   * @param {*} config devServer的配置，可在此基础上进行修改
   * @return {*} 必须返回修改后的config
   */
  devServerOverride: function (config) {
    return config;
  },
};