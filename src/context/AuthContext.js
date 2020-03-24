//    const login  = async () => {
//     const response =
//      await axios.post(`http://142.93.46.192:5000/login`,{...auth})
//      const data = await response.json()
//      setAuth(data)
//    console.log(response.data)
//    console.log(...auth)
// const result = await axios.post('http://142.93.46.192:5000/login')
// console.log(result.data)

//    }

import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    password: ""
  }
};

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [auth, setAuth] = useState(initialState);
  let history = useHistory();
  console.log(history);

  const login = async ()  => {
    // const result = await axios.post("http://159.89.192.143:5000/login");
    // console.log(result.data);
    
        try {
          const res = await axios.post(`http://159.89.192.143:5000/login`);
      
          const todos = res.data;
      
          console.log(`GET: Here's the list of todos`, todos);
      
          return todos;
        } catch (e) {
          console.error(e);
        }
    // if(auth.user.email === email && auth.user.password === pass){
    //     history.push("/home")
    //     setAuth({...auth, isAuthenticated :!auth.isAuthenticated})
        
    // }else{
    //     console.log("wrong pass");           
    // }
    // history.push("/games")
  }

  return (
    <AuthContext.Provider value={{ ...auth, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
