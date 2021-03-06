import resources from '../resources'

function createRoutes (store) {
  const routes = [
    {
      path: '/auth',
      component: () => import('layouts/FullPageFormLayout.vue'),
      children: [
        {
          path: 'login',
          component: () => import('pages/Login.vue')
        },
        {
          path: 'recovery',
          component: () => import('pages/RecoverPassword.vue')
        }
      ]
    },

    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('pages/Index.vue')
        },
        // Add default routes for each registered resource
        ...Object.values(resources).map(resource => {
          return {
            path: resource.name,
            component: resource.ui.indexComponent
              ? resource.ui.indexComponent
              : () => import('pages/MasterDetail.vue'),
            props: {
              resource
            }
          }
        })
      ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue')
    }
  ]

  return routes
}

export default createRoutes
