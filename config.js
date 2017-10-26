/**小程序配置 */
var host = "https://api.vd.cn";
var config = {
  service:{
    host,
    carouselUrl:`${host}/mengdianApp/getPageInfo`,
    navBarUrl:`${host}/mengdianApp/getMdTabbar`,
    floatBotom:`${host}/mengdianApp/getAppRightBottomFloat`,
    bubbles:`${host}/mengdianApp/getHomeRecommendBubble`,
    preferedUrl: `${host}/maps/index`
  }
}

module.exports = config;