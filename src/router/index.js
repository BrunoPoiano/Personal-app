import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'
import Login from '../views/Login/index.vue'
import AboutView from '../views/AboutView.vue'
import CreateAccount from '../views/CreateAccount/index.vue'
import MotoKms from '../views/Moto/Kms/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/moto/kms',
      name: 'moto-kms',
      component: MotoKms
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccount
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("EXER_TOKEN");

  console.log('aqui isAuthenticated', isAuthenticated)

  if (isAuthenticated && to.name === 'login') {
    next({ name: 'home' });
  } else if (!isAuthenticated) {
    if (to.name !== 'login' && to.name !== 'create-account') {
      next({ name: 'login' });
    } else {
      next();

    }
  } else {
    next();
  }
});

export default router
