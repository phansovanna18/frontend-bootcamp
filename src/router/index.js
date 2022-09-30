import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignUpInfoView from '../views/SignUpInfoView.vue'
import SignOutView from '../views/SignOutView.vue'
import MatchView from '../views/MatchView.vue'
import LikeView from '../views/LikeView.vue'
import SettingView from '../views/SettingView.vue'
import ProfileView from '../views/ProfileView.vue'
import EditProfileView from '../views/EditProfileView.vue'


const _next = async (to, from, next) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token === null || token === undefined) {
    if (to.path.includes('signin'))
      next();
    next("/signin");
    return
  } else if (to.path.includes('signin')) {
    next('/home');
  }
  next();
};



const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
    beforeEnter: _next
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/signupinfo',
    name: 'signupinfo',
    beforeEnter: _next,
    component: SignUpInfoView
  },
  {
    path: '/signout',
    name: 'signout',
    component: SignOutView
  },
  {
    path: '/home',
    name: 'home',
    beforeEnter: _next,
    component: HomeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/match',
    name: 'match',
    beforeEnter: _next,
    component: MatchView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/like',
    name: 'like',
    beforeEnter: _next,
    component: LikeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/setting',
    name: 'setting',
    beforeEnter: _next,
    component: SettingView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: _next,
    component: ProfileView,
    meta: {
      layout: 'HomeLayout'
    },
  },
  {
    path: '/profile/edit',
    name: 'profileedit',
    beforeEnter: _next,
    component: EditProfileView,
    meta: {
      layout: 'HomeLayout'
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
