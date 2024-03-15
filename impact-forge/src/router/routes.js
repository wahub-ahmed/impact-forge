import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') }, // Use your existing homepage or create a new one
      { path: 'browse-projects', name: 'BrowseProjects', component: defineAsyncComponent(() => import('pages/BrowseProjects.vue')) },
      { path: 'your-investments', name: 'YourInvestments', component: defineAsyncComponent(() => import('pages/YourInvestments.vue')) },
      { path: 'your-investments', name: 'ForumPage', component: defineAsyncComponent(() => import('pages/Forum.vue')) },
      { path: 'your-investments', name: 'InitiateProject', component: defineAsyncComponent(() => import('pages/InitiateProject.vue')) },
      { path: 'your-investments', name: 'MyProfile', component: defineAsyncComponent(() => import('pages/MyProfile.vue')) },
      { path: 'your-investments', name: 'FAQ', component: defineAsyncComponent(() => import('pages/FAQ.vue')) }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
