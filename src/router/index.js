import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import MatchView from '../views/MatchView.vue'
import LikeView from '../views/LikeView.vue'
import SettingView from '../views/SettingView.vue'
import ProfileView from '../views/ProfileView.vue'
import EditProfileView from '../views/EditProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/match',
    name: 'match',
    component: MatchView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/like',
    name: 'like',
    component: LikeView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView,
    meta: {
      layout: 'HomeLayout'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      layout: 'HomeLayout'
    },
  },
  {
    path: '/profile/edit',
    name: 'profileedit',
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
