import "core-js/stable/atob";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    // const user = {
    //   userId: 3,
    //   name: "evensatowind@gmail.com",
    //   email: "evensatowind@gmail.com",
    //   iat: 1709173070,
    // };
    const user = jwtDecode(authToken);
    console.log(user);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
