import { createWebHistory, createRouter } from 'vue-router'
import userManager, { login } from './oidc'

const Home = () => import('./pages/Home.vue')
const Partners = () => import('./pages/Volunteers.vue')
const PartnerInfo = () => import('./pages/PartnerInfo.vue')
const AdminPanel = () => import('./pages/AdminPanel.vue')
const Volunteers = () => import('./pages/Partners.vue')
const VolunteerInfo = () => import('./pages/VolunteerInfo.vue')
import LoginCallback from './LoginCallback.vue'
import LogoutCallback from './LogoutCallback.vue'

const routes = [
  { path: '/', component: Home, meta: { layout: 'HomeLayout'} },
  { path: '/partners', component: Volunteers },
  { path: '/partner:id', component: PartnerInfo },
  { path: '/volunteers', component: Partners },
  { path: '/volunteer:id', component: VolunteerInfo },
  { path: '/authentication/login-callback', component: LoginCallback },
  { path: '/authentication/logout-callback', component: LogoutCallback },
  { path: '/adminPanel', component: AdminPanel },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    userManager
      .getUser()
      .then((user) => {
        if (!user || user.expired) {
          login()
        } else {
          next()
        }
      })
      .catch((error) => {
        console.error('Route guard error:', error)
        login()
      })
  } else {
    next()
  }
})

export default router
