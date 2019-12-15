const routes = [{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/AccountingPage.vue')
    }]
  },
  {
    path: '/login',
    component: () => import('layouts/Empty.vue'),
    children: [{
      path: '',
      component: () => import('pages/Login.vue')
    }]
  },
  {
    path: '/register',
    component: () => import('layouts/Empty.vue'),
    children: [{
      path: '',
      component: () => import('pages/Register.vue')
    }]
  },
  {
    path: '/prediction',
    component: () => import('layouts/AILayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/AIPage.vue')
    }]
  },
  {
    path: '/accounting',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/AccountingPage.vue')
    }]
  },
  {
    path: '/contacts',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Contacts.vue')
    }]
  },
  {
    path: '/accounting/main',
    component: () => import('layouts/ACLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Main.vue')
    }]
  },
  {
    path: '/accounting/customers',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Customers.vue')
    }]
  },
  {
    path: '/accounting/providers',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Provider.vue')
    }]
  },
  {
    path: '/accounting/products',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Products.vue')
    }]
  },
  {
    path: '/accounting/orders',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Orders.vue')
    }]
  },
  {
    path: '/accounting/warehouse',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/accounting/Warehouse.vue')
    }]
  },
  {
    path: '/prediction/cars',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/prediction/Car.vue')
    }]
  },
  

  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
