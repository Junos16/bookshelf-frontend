import React, { useEffect, useState } from "react";
import UserDetailConnection from "../connections/UserDetailConnection";
import { User } from "../constants/Types";
import Table from "../components/Table";
import Button from "../components/Button";
import DetailsTable from "../components/DetailsTable";

const ProfilePage: React.FC = () => {
    const [userDetails, setUserDetails] = useState<User | undefined>(undefined);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const fetchedDetails = await UserDetailConnection();
            setUserDetails(fetchedDetails);
        };

        fetchUserDetails();
    }, []);

    return (
        <div>
            {userDetails ? (
                <div>
                    <DetailsTable 
                        entityType="User" 
                        entity={userDetails}
                    />
                    <Table 
                        list = {userDetails["docs"]} 
                        download = {true} 
                        update = {true} 
                        del = {true}
                    />
                </div>
            ) : (
                <div>
                    <p>Please Login</p>
                    <Button
                        linkName = "Login"
                        linkUrl = "/login"
                    />
                </div>
            )}
        </div>
    );
}

export default ProfilePage;