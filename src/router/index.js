import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import User from '@/components/User'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '*',
    name: 'noAllowPath',
    redirect: '/signup'
  }, {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      isBeforeAuth: true
    }
  }, {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      isBeforeAuth: true
    }
  }, {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      required: true
    }
  }]
})

router.beforeEach((to, form, next) => {
  firebase.auth().onAuthStateChanged(user => {
    // userが登録してあればuserObjectを返す
    const currentUser = firebase.auth().currentUser
    // metaのrequiresAuthの値
    const meta = to.meta
    // ログイン中かどうか
    if (currentUser) {
      if (meta.isBeforeAuth) {
        next('user')
      } else {
        next()
      }
    } else {
      if (meta.required) {
        next('signin')
      } else {
        next()
      }
    }
  })
})

export default router
