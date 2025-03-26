import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

 const signIn = (email, password) => {
    if (email === "admin@gmail.com" && password === "1") {
      setUser({ name: "Admin", email });
    } else {
      alert("Mật khẩu không đúng. Vui lòng thử lại");
    }
  };
  const signOut = () => {
    setUser(null);
  };

  
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

