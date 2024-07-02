import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import { UserProfile } from "../Models/User";
import axios from "axios";
import { loginAPI } from "../Service/AuthService";

type UserContextType = {
  user: UserProfile | null;
  loginUser: (username: string, password: string) => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    //const token = localStorage.getItem("token");
    if (user) {
      setUser(JSON.parse(user));
      //axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  

  const loginUser = async (username: string, password: string) => {
    console.log("UseAuth");
    const data = await loginAPI(username, password);
    if (data == 'Bima') {
      const userObj = {
        userName: data,
      };
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(userObj!);
      toast.success("Login Success!");
      navigate("\home");
    } else {
      toast.warning("Login Failed: Invalid credentials");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };


  return (
    <UserContext.Provider
      value={{ loginUser, user, isLoggedIn, }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);