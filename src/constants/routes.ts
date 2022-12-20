const routes = {
  admin: {
    0: {
      component: 'separarator',
    },
    1: {
      text: 'Módulos',
      component: 'h6',
    },
    2: {
      path: '/formularios',
      icon: 'fa fa-table',
      component: 'link',
    },
    3: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
      component: 'link',
    }
  },
  clients: {
    0: {
      component: 'separarator',
    },
    1: {
      text: 'Usuarios',
      component: 'h6',
    },
    2: {
      path: '/formularios',
      icon: 'fa fa-table',
      component: 'link',
    },
    3: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
      component: 'link',
    }
  },
  user: {
    0: {
      component: 'separarator',
    },
    1: {
      text: 'Mi cuenta',
      component: 'h6',
    },
    2: {
      path: '/formularios',
      icon: 'fa fa-table',
      component: 'link',
    },
    3: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
      component: 'link',
    }
  },
};

export { routes };
