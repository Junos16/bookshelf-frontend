import React from "react";
import Header from "../components/Header";
// import Login from "../components/Login";
import DetailsForm from "../components/DetailsForm";

const LoginPage: React.FC = () => {
    return (
        <div>
            <Header
                heading = "Login to your account"
                paragraph = "Don't have an account yet? "
                linkName = "Signup"
                linkUrl = "/signup"
            />
            {/* <Login/> */}
            <DetailsForm fieldType="Login"/>
        </div>
    );
}

export default LoginPage;