import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null);
    function signUp(email, password) {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  if(existingUsers.find(user => user.email === email)) {
    return {success: false, message: "User already exists"};
  }
  const newUser = { email, password };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  setUser({email});
  return {success: true};
}
    function login(email, password) {
        // API to authenticate user
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find(user => user.email === email && user.password === password);
        if(user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            setUser({email});
            return {success: true};
        } else {
            return {success: false, message: "Invalid email or password"};
        }
    }

    function logout() {
        localStorage.removeItem("currentUser");
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export default AuthProvider;
export { AuthContext };
export { useAuth };
