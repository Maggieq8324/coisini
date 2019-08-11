// pages/categories/categories.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate_nav_list:[
      {name:"布窗帘",id:"bucurtains"},
      {name:"纱窗帘",id:"shacurtains"},
      {name:"无缝帘",id:"wucurtains"},
      {name:"直立帘",id:"zhicurtains"},
      {name:"罗马帘",id:"luocurtains"},
      {name:"木竹帘",id:"mucurtains"},
      {name:"墙纸",id:"smart"},
      {name:"墙布",id:"kids"},
      {name:"玄关",id:"lignts"},
      {name:"壁画",id:"adapter"},
      {name:"其他",id:"headset"}
    ],
    curIndex:0,
    toView:"bucurtains",
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  switchCategory(e){
    // console.log(e.currentTarget.dataset.id);
    const curIndex=e.currentTarget.dataset.index?e.currentTarget.dataset.index:0;
    this.setData({
      toView:e.currentTarget.dataset.id,
      curIndex
    });
  },
  onLoad: function (options) {
    const detail=app.globalData.category;
    this.setData({
      detail
    });
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