// pages/prefered/prefered.js
var config = require('../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    components:[]
  },

  getPreferedData: function() {
    let $this = this;
    wx.request({
      url: config.service.preferedUrl, 
      data: {"BaseAppType": "android", "BaseAppVersion": "4.10.0", "SystemVersion": "7.0", "_sign_": "052E45E38AF20F8B8C7893064DF2B8A1", "_token_": "0037d0e10ba648abb80804a620d46cf8", "_wid_": "603371033", "appIdentifier": "com.hs.yjseller", "parameterInput": { "page": 1, "pageSize": 10, "sortType": 0 }, "shop_id": "126311046", "timeStamp": "2017-10-26T17:13:33.407Z" 
      },
      method: "POST",
      success: function (resp) {
        console.log(resp);
        $this.setData({
          components: resp.data.data.components
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getPreferedData();
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