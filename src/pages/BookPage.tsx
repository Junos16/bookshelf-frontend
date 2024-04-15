import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const BookPage: React.FC = () => {
    return (
        <div>
            <Header
                heading = "BookShelf"
                paragraph = "Share books and notes with all students in your university"
                linkName = "Home"
                linkUrl = "/"
            />
            <div>
                <Button 
                    linkName = "Login"
                    linkUrl = "/login"
                />
                <Button
                    linkName = "Signup"
                    linkUrl = "/signup"
                />
            </div>
            <Grid
            />
        </div>
    );
}

export default BookPage;