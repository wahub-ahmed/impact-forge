import { defineAsyncComponent } from 'vue'

const routes = [
  // Landing Page 
  { path: '/', component: () => import('pages/LandingPage.vue') },
  // Login & Signup 
  { path: '/login', component: () => import('pages/LoginPage.vue') },
  { path: '/signup', component: () => import('pages/SignupPage.vue') },
  // MainLayout & Children (Protected routes)
  {
    path: '/dashboard', // Base path remains for the layout
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'browse-projects', name: 'BrowseProjects', component: defineAsyncComponent(() => import('pages/BrowseProjects.vue')) },
      { path: 'your-investments', name: 'YourInvestments', component: defineAsyncComponent(() => import('pages/YourInvestments.vue')) },
      { path: 'forum', name: 'ForumPage', component: defineAsyncComponent(() => import('pages/Forum.vue')) }, // Renamed 'your-investments' to 'forum'
      { path: 'initiate-project', name: 'InitiateProject', component: defineAsyncComponent(() => import('pages/InitiateProject.vue')) },
      { path: 'my-profile', name: 'MyProfile', component: defineAsyncComponent(() => import('pages/MyProfile.vue')) },
      { path: 'faq', name: 'FAQ', component: defineAsyncComponent(() => import('pages/FAQ.vue')) }
    ]
  },

  // Always leave this as last one 
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
