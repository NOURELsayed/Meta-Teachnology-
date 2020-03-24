import React from 'react'
import Container  from "react-bootstrap/Container";
import NavBar from "../components/welcomeNav";
import SignUpForm from "../components/SignupForm"
import  "../styles/SignInUpForm.scss"

const SignUp = () => {
    return(
        <Container style={{paddingTop: "10rem",minHeight:"90vh"}} className="signup">
            <NavBar />
            <SignUpForm/>
        </Container>
    )
}

export default SignUp;