import React, { useEffect, useState } from "react";
import UserDetailConnection from "../connections/UserDetailConnection";
import { User } from "../constants/Types";
import { tempUser } from "../constants/TempObjects";
import Login from "../components/Login";
import Table from "../components/Table";

const ProfilePage: React.FC = () => {
    const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
    const rows = Object.keys(tempUser);

    useEffect(() => {
        const fetchUserDetials = async () => {
            const fetchedDetails = await UserDetailConnection();
            setUserDetails(fetchedDetails);
        };

        fetchUserDetials();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            {userDetails ? (
                <div>
                    <table>
                        <tbody>
                            {rows.map((key) => {
                                if (Array.isArray(userDetails[key])) {
                                    return null; 
                                } else {
                                    const value = userDetails[key] as string;
                                    return (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{value}</td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                    <Table list = {userDetails["docs"]} />
                </div>
            ) : (
                <div>
                    <p>Please Login</p>
                    <Login />
                </div>
            )}
        </div>
    );
}

export default ProfilePage;