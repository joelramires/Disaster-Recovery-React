import React, { createContext, useContext, useEffect, useState } from 'react';
import useAxios from 'axios-hooks' 

function getCurrentUser(accessToken) {
  if (accessToken  === 'token') {
    return {
      name: 'localStorage.getItem.name',
    };
  }
}
 
const initialState = {
  user: localStorage.getItem('user'),
  accessToken: undefined,
};
 
const UserContext = createContext(initialState);
 
export function UserProvider({ children }) {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
 
  function handleAccessTokenChange() {
    if (!user.name && accessToken) {
      localStorage.setItem('token', accessToken);
      const user = getCurrentUser(accessToken);
      setUser(user);
    } else if (!accessToken) {
      // Log Out
      localStorage.removeItem('token');
      setUser({});
    }
  }
 
  useEffect(() => {
    handleAccessTokenChange();
  }, [accessToken]);
 
  return (
    <UserContext.Provider value={{ user, accessToken, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
}
 
// export const useUser = () => useContext(UserContext);

  export const useUser = () => {
    const[{data,loading, error}]=useAxios(
      'http://localhost:8080/getUser'
      )

    console.log(data);
    return data;
  }
