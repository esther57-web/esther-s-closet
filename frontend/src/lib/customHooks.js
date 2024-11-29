import { getAuthenticatedUser } from './common';
import { useState, useEffect } from 'react';

export function useUser() {
  const [connectedUser, setConnectedUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      setConnectedUser(user);
      setAuth(authenticated);
    }
    getUserDetails();
  }, []);

  return { connectedUser, auth };
}

