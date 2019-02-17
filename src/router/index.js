import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import local from '@/components/local'
import HomeNav from '@/components/home/sonNav'
import daily from '@/components/daily'
import dailyMain from '@/components/daily/show'
import top250 from '@/components/top250'
import design from '@/components/design'

Vue.use(Router)
let router = new Router({
  linkActiveClass: 'is_show',
  routes: [
    {
      path: '/home/:id?',
      name: 'Home',
      component: Home,
      meta: {
        name: '首页'
      },
      children: [
        {
          path: '/home/:id?',
          name: 'HomeNav',
          component: HomeNav,
          meta: {
            name: '首页'
          }
        }
      ]
    },
    {
      path: '/local',
      name: 'local',
      component: local,
      meta: {
        name: '自定义网页'
      }
    },
    {
      path: '/daily',
      name: 'daily',
      component: daily,
      meta: {
        keepAlive: true,
        name: '每日一粒'
      }
    },
    {
      path: '/daily/:id?',
      name: 'dailyMain',
      component: dailyMain,
      meta: {
        name: '每日一粒'
      }
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250,
      meta: {
        name: '豆瓣250'
      }
    },
    {
      path: '/design/:id?',
      name: 'design',
      component: design,
      meta: {
        name: '设计观赏'
      }
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        name: '首页'
      }
    }
  ]
})
export default router
