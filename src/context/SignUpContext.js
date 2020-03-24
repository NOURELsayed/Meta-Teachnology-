import React, { createContext, useState } from "react";
import axios from "axios";
const SignUpinitialState = {
  userSignup: {
    fristName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
};

export const SignUpContext = createContext();

const SignUpContextProvider = props => {
  const [SignUpAuth, setSingupAuth] = useState(SignUpinitialState);

  const SignUpContextFunction = async (userSignup) => {
//     console.log("userSignup",userSignup);
//     setSingupAuth({
//     fristName:userSignup.fristName,
//     lastName: userSignup.lastName,
//     email: userSignup.email,
//     password:userSignup.password,
//     confirmPassword:userSignup.confirmPassword
//     })
//     console.log("userSignup after setstate in context",userSignup);
try {
    const res = await axios.post(`http://142.93.46.192:5000/register`);

    const resdata = res.data;

    console.log(`GET: Here's the list of todos`, resdata);
    return resdata;
  } catch (e) {
    console.error(e);
  }
  };


  return (
    <SignUpContext.Provider value={{SignUpAuth,SignUpContextFunction}}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
