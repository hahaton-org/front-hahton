import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Partners = () => import('./pages/Volunteers.vue')
const PartnerInfo = () => import('./pages/PartnerInfo.vue')
const AdminPanel = () => import('./pages/AdminPanel.vue')
const Volunteers = () => import('./pages/Partners.vue')
const VolunteerInfo = () => import('./pages/VolunteerInfo.vue')
const Register = () => import('./pages/Register.vue')
import { isAuth, redirectToSignIn, role } from './auth'

const routes = [
  { path: '/', component: Home, meta: { layout: 'HomeLayout'} },
  { path: '/partners', component: Volunteers, meta: { requiresAuth: true, roleAuth: 'ROLE_VOLUNTEER'} },
  { path: '/partner:id', component: PartnerInfo, meta: { requiresAuth: true, roleAuth: 'ROLE_VOLUNTEER'} },
  { path: '/volunteers', component: Partners, meta: { requiresAuth: true, roleAuth: 'ROLE_PARTNER'}},
  { path: '/volunteer:id', component: VolunteerInfo, meta: { requiresAuth: true, roleAuth: 'ROLE_PARTNER'} },
  { path: '/adminPanel', component: AdminPanel, meta: { requiresAuth: true, roleAuth: 'ROLE_ADMIN'} },
  { path: '/register', component: Register }
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
    if (!isAuth.value)
      redirectToSignIn()
    else {
      if (to.meta.roleAuth === 'ROLE_PARTNER' && role.value === 'ROLE_PARTNER' ||
        to.meta.roleAuth === 'ROLE_VOLUNTEER' && role.value === 'ROLE_VOLUNTEER' ||
        to.meta.roleAuth === 'ROLE_ADMIN' && role.value === 'ROLE_ADMIN' ||
        to.meta.roleAuth === 'ROLE_BOTH' && (role.value === 'ROLE_PARTNER' || role.value === 'ROLE_VOLUNTEER')
      )
        next()
      }
  }
  else
    next();
});

export default router
