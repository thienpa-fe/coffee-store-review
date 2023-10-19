'use client';

import AuthProviderStyled from './styles';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }) => (
  <SessionProvider>
    <AuthProviderStyled>{children}</AuthProviderStyled>
  </SessionProvider>
);

export default AuthProvider;
