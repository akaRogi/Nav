// 左侧导航数据
import Nav from './nav.json'
// 首页的搜索导航
import homeNav from './homeNav.json'
// top250数据
import top250 from './top250.json'
// 设计数据数据
import design from './design.json'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  // 定义公用数据
  state: {
    title: '',
    p: 0,
    Nav,
    homeNav,
    top250,
    design,
    url: '',
    designList: [],
    LeftNav: false,
    leftsonNav: 0,
    scroll: 60
  },
  mutations: {
    titleFn (store, vla) {
      store.title = vla
    },
    updateUrl (store, url) {
      // 首页的搜索切换功能
      store.url = url
    },
    LeftNavFn (store) {
      // 手机端，的特效切换
      store.LeftNav = !store.LeftNav
    },
    nullList (store) {
      // 由于用户可能多次从别的页面进入（设计观赏）页面
      // 所以每次进入之前先把，之前记录先清空，否则之前记录会叠加
      store.designList = []
    },
    designfn (store, data) {
      // 用于记录（设计观赏）网页，每一个元素到网页顶部的距离
      store.designList.push(data)
    },
    leftsongNavFn (store, p) {
      // 用于记录左侧子导航，每次点击之后，的索引值
      store.leftsonNav = p
    },
    scrollFn (store, num) {
      // 用于控制（设计观赏）页面，滚动条滑动的速度
      // 注：电脑端和手机端滑动速度，电脑端默认60px
      store.scroll = num
    }
  },
  getters: {
  },
  actions: {
  }
})
export default store
