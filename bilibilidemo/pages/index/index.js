const app = getApp()

Page({
  data: {
    currentindex:0,
    swiperList:[],
    moviesList:[],
    navList:[]
  },
  getNavList(){  //请求导航数据
    wx.request({
      url: 'http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navlist',
      success:(response)=>{
          this.setData({
           navList : response.data.data.navList
          })
      },
    })
  },
  getSwiperList(){
    wx.request({
      url: 'http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success:(response)=>{
        this.setData({
          swiperList: response.data.data.swiperList
        })
      }
    })
  },
  getMoviesList(){
    wx.request({
      url: 'http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success:(response)=>{
        this.setData({
          moviesList: response.data.data.videosList
        })
      }
    })
  },
  onLoad(){
    this.getNavList();
    this.getSwiperList();
    this.getMoviesList();
  },
  clicknav(e){  //下划线
    this.setData({
      currentindex:e.target.dataset.index
    })
  }

})
