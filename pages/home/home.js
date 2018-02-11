// pages/home/home.js
// 引入配置
var config = require('../../config');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    carousels:[],
    navBars:[],
    advertisement:{},
    blocks:[],
    goods:[],
    floatInfors:[],
    bubbles:[],
    clientHeight:0
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
 * "channel":"AppBuyerHome",
"page":1,
"pageSize":20,
"BaseAppType":"android",
"BaseAppVersion":"4.9.0",
"SystemVersion":"7.0",
"_sign_":"B838E850E67D41E357D461309D294561",
"appIdentifier":"com.hs.yjseller"
 */
  getCoursel: function () {
    let $this = this;

    wx.request({
      url: config.service.carouselUrl,
      data: {
        "channel": "AppBuyerHome",
        "page": 1,
        "pageSize": 20,
        "BaseAppType": "android",
        "BaseAppVersion": "4.9.0",
        "SystemVersion": "7.0",
        "_sign_": "B838E850E67D41E357D461309D294561",
        "appIdentifier": "com.hs.yjseller"
      },
      method: "POST",
      success: function (resp) {
        
        var carousels = resp.data.data.materialList[0].materialList;
        var navBars = resp.data.data.navChannel.materialList;
        var goods = resp.data.data.materialList.splice(4,5);
        console.log(carousels);
        console.log(navBars);
        console.log(resp.data.data.materialList[1].pictureUrl);
        $this.setData({
          carousels: resp.data.data.materialList[0].materialList,
          navBars: resp.data.data.navChannel.materialList,
          advertisement: resp.data.data.materialList[1],
          blocks: resp.data.data.materialList[2].materialList,
          goods:goods
        })
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },

  navClick:function(e){
    console.log( e.currentTarget);

    this.setData({
      currentTab: e.currentTarget.dataset.idx 
    })
  },

  getFloatBottom: function(){
    let $this = this;
    wx.request({
      url: config.service.floatBotom,
      data: { 
        "BaseAppType": "android", 
        "BaseAppVersion": "4.9.0", 
        "SystemVersion": "7.0", 
        "_sign_": "16566117B96009C062FFE80A1631C584", 
        "appIdentifier": "com.hs.yjseller" },
      method:'POST',
      success:function(resp){
        console.log('float-----');
        console.log(resp.data.data.infos);
        $this.setData({
          floatInfors:resp.data.data.infos
        })
      },
      fail:function(error){
      console.log(error);
      }
    })
  },

  getBubbles: function(){
    let $this = this;
    wx.request({
      url: config.service.bubbles,
      data: { 
        "page": 1, 
        "pageSize": 10,
        "BaseAppType": 
        "android", 
        "BaseAppVersion": "4.9.0", 
        "SystemVersion": "7.0", 
        "_sign_": "D36528C6A22D3EA94A0FBFF7EA024BDA", 
        "appIdentifier": "com.hs.yjseller" },
      method:'POST',
      success:function(resp){
        $this.setData({
          bubbles:resp.data.data.materialList
        })
      },
      fail:function(error){
        console.log(error);
      }
    })
  },

  getSystemInfo:function(){
    let $this = this;
    wx.getSystemInfo({
      success: function (res) {
        $this.setData({
          clientHeight: res.windowHeight-30
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getCoursel();
    this.getFloatBottom();
    this.getBubbles();
    this.getSystemInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})