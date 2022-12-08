import React, { createContext } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const accessToken = localStorage.getItem('accessToken');

  console.log(accessToken, 'aauth')

  return (
    <AuthContext.Provider
      value={{
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
