
const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutPrincipal.vue'),
    children: [

      { path: '', component: () => import('pages/Estaciones.vue') },
      { path: 'estaciones', component: () => import('pages/Estaciones.vue') },
      { path: 'carril', component: () => import('pages/Carril.vue') },
      { path: 'acercade', component: () => import('pages/AcercaDe.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
