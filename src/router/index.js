import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '../components/addBlog'
import showBlog from '../components/showBlog'
import singleBlog from '../components/singleBlog'
import editBlog from '../components/editBlog'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去除链接里的#号
  routes: [
    {
      path: '/',
      name: 'showBlog',
      component: showBlog
    },
    {
      path: '/addBlog',
      name: 'addBlog',
      component: addBlog
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: singleBlog
    },
    {
      path: '/edit/:id',
      name: 'editBlog',
      component: editBlog
    }  
  ]
})
