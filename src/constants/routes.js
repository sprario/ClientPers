const routes = {
  operations: {
    account: {
      path: '/mi-cuenta',
      icon: '',
    }
  },
  clients: {
    account: {
      path: '/mi-cuenta',
      icon: '',
    }
  },
  user: {
    account: {
      path: '/mi-cuenta',
      icon: '',
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