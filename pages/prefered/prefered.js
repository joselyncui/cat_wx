// pages/prefered/prefered.js
var config = require('../../config');
var utils = require('../../utils/util');

const screenSize = utils.screenInfo();
let interval;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    components:[],
    scrollLeft:0,
    slideImgs: [],
    currentTab:0,
    goods2List:[],
    isTop:false,
  },

  getPreferedData: function() {
    let $this = this;
    wx.request({
      url: config.service.preferedUrl, 
      data: {"BaseAppType": "android", "BaseAppVersion": "4.10.0", "SystemVersion": "7.0", "_sign_": "052E45E38AF20F8B8C7893064DF2B8A1", "_token_": "0037d0e10ba648abb80804a620d46cf8", "_wid_": "603371033", "appIdentifier": "com.hs.yjseller", "parameterInput": { "page": 1, "pageSize": 10, "sortType": 0 }, "shop_id": "126311046", "timeStamp": "2017-10-26T17:13:33.407Z" 
      },
      method: "POST",
      success: function (resp) {
        $this.setData({
          components: resp.data.data.components,
          slideImgs: resp.data.data.components[3].images,
          goods2List: resp.data.data.components[9].anchor[0].goodsList,
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },

/***
 * 自动滚动scroll-view
 */
  move: function(e){
    let $this = this;
      
    interval = setInterval(function () {
      $this.setData({
        scrollLeft: $this.data.scrollLeft + screenSize.screenWidth * 0.6,
      });

      // $this.changeData();

    }, 1500);

  },

  changeData: function(){
    let imgs = this.data.slideImgs.concat();
    let img = imgs.shift();
    imgs.push(img);
    this.setData({
      slideImgs: imgs,
    });
  },

  end: function(e) {
    
    let imgs = this.data.slideImgs.concat();
    // for(let i = 0; i < this.data.slideImgs.length; i++) {
    //   imgs.push(this.data.slideImgs[i]);
    // }
    // this.setData({
    //   slideImgs:imgs,
    // });
    this.setData({
      scrollLeft: 0
    });

  },

  

  navClick: function(e){
    let index = e.currentTarget.dataset.idx;
    this.setData({
      currentTab: index,
      goods2List: this.data.components[9].anchor[index].goodsList,
    });

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPreferedData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.move();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if(interval != undefined) {
      clearInterval(interval);
    }
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
  
  },

  onPageScroll: function(e) {
    let $this = this;
    wx.createSelectorQuery().select('#scroll-fixed-deliver').boundingClientRect(function (rect) {
      // rect.id      // 节点的ID
      // rect.dataset // 节点的dataset
      // rect.left    // 节点的左边界坐标
      // rect.right   // 节点的右边界坐标
      // rect.bottom  // 节点的下边界坐标
      // rect.width   // 节点的宽度
      // rect.height  // 节点的高度
      // rect.top     // 节点的上边界坐标

      let top = rect.top;
      let result = $this.data.isTop;
      if(top>0) {
        result = false;
      } else {
        result = true;
      }

      $this.setData({
        isTop: result,
      });
     
    }).exec()

  }
})