import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Storefront Flow
  {
    path: '/classes',
    name: 'Classes: index',
    component: () => import('./RouterView.vue'),
    children: [
      {
        path: '',
        name: 'Store Classes',
        component: () => import('../views/Classes/index.vue'),
      },
      {
        path: ':classId',
        name: 'Class Details',
        component: () => import('../views/Classes/ClassDetails.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/memberships',
    name: 'Memberships',
    component: () => import('../views/Memberships/index.vue'),
  },

  // Sign In & Password Reset Flow
  {
    path: '/sign-in',
    name: 'Sign In',
    component: () => import('../views/Auth/SignIn.vue'),
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () => import('../views/Auth/ForgotPassword.vue'),
  },
  {
    path: '/reset-password',
    name: 'Reset Password',
    component: () => import('../views/Auth/ResetPassword.vue'),
  },

  // Create New Account Flow
  {
    path: '/create',
    name: 'Create: index',
    component: () => import('../views/Auth/Create/index.vue'),
    children: [
      {
        path: 'account',
        name: 'Create: Account Info',
        component: () => import('../views/Auth/Create/AccountInfo.vue'),
      },
      {
        path: 'attendee',
        name: 'Create: Attendee Profiles',
        component: () => import('../views/Auth/Create/AttendeeProfiles.vue'),
      },
      {
        path: 'payment',
        name: 'Create: Payment Methods',
        component: () => import('../views/Auth/Create/PaymentMethods.vue'),
      },
    ],
  },

  // Account Overview Flow
  {
    path: '/overview',
    name: 'Overview: index',
    component: () => import('../views/Overview/index.vue'),
    children: [
      {
        path: 'account',
        name: 'Overview: Account Info',
        component: () => import('../views/Overview/AccountInfo.vue'),
      },
      {
        path: 'profiles',
        name: 'Overview: Saved Profiles',
        component: () => import('../views/Overview/SavedProfiles.vue'),
      },
      {
        path: 'payment',
        name: 'Overview: Payment Methods',
        component: () => import('../views/Overview/PaymentMethods.vue'),
      },
      {
        path: 'history',
        name: 'Overview: Order History index',
        component: () => import('./RouterView.vue'),
        children: [
          {
            path: '',
            name: 'Overview: Order History Table',
            component: () => import('../views/Overview/OrderHistory/index.vue'),
          },
          {
            path: ':orderId',
            name: 'Overview: Order Details',
            component: () =>
              import('../views/Overview/OrderHistory/OrderDetails.vue'),
            props: true,
          },
        ],
      },
    ],
  },

  // Checkout Flow
  {
    path: '/checkout',
    name: 'Checkout: index',
    component: () => import('../views/Checkout/index.vue'),
    children: [
      {
        path: 'cart',
        name: 'Checkout: Review Cart',
        component: () => import('../views/Checkout/ReviewCart/index.vue'),
      },
      {
        path: 'payment',
        name: 'Checkout: Payment Info',
        component: () => import('../views/Checkout/PaymentInfo.vue'),
      },
      {
        path: 'confirmation',
        name: 'Checkout: Confirmation',
        component: () => import('../views/Checkout/Confirmation.vue'),
      },
    ],
  },

  // Instructors Flow
  {
    path: '/instructors',
    component: () => import('./RouterView.vue'),
    children: [
      {
        path: '/instructors',
        name: 'Store Instructors',
        component: () => import('../views/Instructors/index.vue'),
      },
      {
        path: ':instructorId',
        name: 'Instructor Profile',
        component: () => import('../views/Instructors/InstructorProfile.vue'),
        props: true,
      },
    ],
  },

  // Donate
  {
    path: '/donate',
    name: 'Store Donate',
    component: () => import('../views/Donate/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
