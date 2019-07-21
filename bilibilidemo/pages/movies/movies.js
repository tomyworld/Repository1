// pages/movies/movies.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:[],
    commentData:null,
    commentList:[]
  },
  getotherList(vedioid) {
    wx.request({
      url: 'http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + vedioid,
      success:(response)=>{
        this.setData({
          othersList: response.data.data.othersList
        })
      }
    })
  },
  getcommentList(vedioid){
    wx.request({
      url: 'http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + vedioid,
      success:(response)=>{
        console.log(response.data.data.commentData)
        this.setData({
          commentData: response.data.data.commentData,
          commentList: response.data.data.commentData.commentList
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let vedioid = options.id;
    this.getotherList(vedioid);
    this.getcommentList(vedioid);
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