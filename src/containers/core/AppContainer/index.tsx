import React from 'react';
import { AppProvider, AuthProvider, UserProvider } from '../../../context';
import ReactQueryCacheProvider from '../ReactQuery';
import MainRouter from '../routers';

const AppContainer = () => (
    <ReactQueryCacheProvider>
        <AppProvider>
          <AuthProvider>
            <UserProvider>
              <MainRouter />
            </UserProvider>
          </AuthProvider>
        </AppProvider>
    </ReactQueryCacheProvider>
);

export default AppContainer;
