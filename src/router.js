import { createRouter, createWebHistory } from 'vue-router';

import Home from './page/Home.vue';
import Blog from './page/Blog.vue';
import Project from './page/Projecct.vue';
import BlogDetails from './page/BlogDetails.vue';
import ErrorPage from './page/ErrorPage.vue';

import DefaultLayout from '@/layouts/default.vue';
import ErrorLayout from '@/layouts/error.vue';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Project',
      path: '/project',
      component: Project,
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Blog,
    },
    {
      name: 'BlogDetails',
      path: '/blog_details',
      component: BlogDetails,
    },
    {
      name: 'ErrorPage',
      path: '/:catchAll(.*)',
      component: ErrorPage,
      meta: { layout: ErrorLayout },
    },
  ].map((route) => {
    if (!route.meta?.layout) {
      return {
        ...route,
        meta: {
          layout: DefaultLayout,
        },
      };
    }

    return route;
  }),
});
