 
import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/welcomeNav";
import SignInForm from "../components/SigninForm"
const SignIn = () => {
    return(
        <Container style={{paddingTop: "10rem",minHeight: "90vh"}} className="signin">
            <NavBar />
            <SignInForm/>
        </Container>
    )
}

export default SignIn;