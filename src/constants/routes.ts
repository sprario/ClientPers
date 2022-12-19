const routes = {
  admin: {
    forms: {
      path: '/formularios',
      icon: 'fa fa-table',
    },
    account: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
    }
  },
  clients: {
    forms: {
      path: '/formularios',
      icon: 'fa fa-table',
    },
    account: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
    }
  },
  user: {
    forms: {
      path: '/formularios',
      icon: 'fa fa-table',
    },
    account: {
      path: '/mi-cuenta',
      icon: 'fa fa-user',
    }
  }  
};

export { routes };
/*
Inicio —-> /dashboard
Formularios —> /forms
Operaciones —> /operations
——————————————————
Clientes —> /clients (estaba pensando usar esta misma tanto para back office como alta de cliente .. si el role del que da de alta el
Cliente es “client” cuando de de alta, al nuevo se le pone directamente “user” pero si el que da de alta es el admin, puede elegir con un dropdown

*/