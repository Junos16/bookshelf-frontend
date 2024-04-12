import React from "react";
import Header from "../components/Header";
import Signup from "../components/Signup";

const SignupPage: React.FC = () => {
    return (
        <div>
            <Header
                heading = "Signup to register new user"
                paragraph = "Already have an account? "
                linkName = "Login"
                linkUrl = "/login"
            />
            <Signup/>
        </div>
    );
}

export default SignupPage;