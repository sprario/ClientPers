const routes = {
  admin: [
    {
      title: {
        text: 'Módulos',
        component: 'h6',
      },
    },
    {
      home: {
        path: '/',
        label: 'Inicio',
        icon: 'fa fa-home',
        component: 'link',
        id: 'home',
      },
    },
    {
      forms: {
        path: 'forms',
        label: 'forms',
        icon: 'fa fa-table',
        component: 'link',
        id: 'forms',
      },
    },
    {
      orders: {
        path: 'orders',
        label: 'orders',
        icon: 'fa fa-file-text',
        component: 'link',
        id: 'orders',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Usuarios',
        component: 'h6',
      },
    },
    {
      users: {
        path: 'users',
        label: 'users',
        icon: 'fa fa-users',
        component: 'link',
        id: 'users',
      },
    },
    {
      users: {
        path: 'adduser',
        label: 'adduser',
        icon: 'fa fa-user-plus',
        component: 'link',
        id: 'adduser',
      },
    },
  ],
};

export { routes };
