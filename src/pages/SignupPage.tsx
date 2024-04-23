import React from "react";
import Header from "../components/Header";
import DetailsForm from "../components/DetailsForm";

const SignupPage: React.FC = () => {
    return (
        <div>
            <Header
                heading = "Signup to register new user"
                paragraph = "Already have an account? "
                linkName = "Login"
                linkUrl = "/login"
            />
            <DetailsForm fieldType="Signup"/>
        </div>
    );
}

export default SignupPage;