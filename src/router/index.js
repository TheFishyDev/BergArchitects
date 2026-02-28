import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Berg Architects - Innovative Architectural Design'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us - Berg Architects'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Our Gallery - Berg Architects'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us - Berg Architects'
    }
  },
  // Redirect any unknown paths to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

// Update page title based on route meta data
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Berg Architects';
  next();
});

export default router;
