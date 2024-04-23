import React, { useEffect, useState } from "react";
import UserDetailConnection from "../connections/UserDetailConnection";
import { User } from "../constants/Types";
import Table from "../components/Table";
import Button from "../components/Button";
import DetailsTable from "../components/DetailsTable";
import DetailsForm from "../components/DetailsForm";
import UpdateEntityConnection from "../connections/UpdateEntityConnection";
import Navbar from "../components/Navbar";

const ProfilePage: React.FC = () => {
    const [navbarProperties, setNavbarProperties] = useState("Profile")
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
            <Navbar
                options={["Profile", "Update"]}
                onSelectEntity = {setNavbarProperties}
            />
            {navbarProperties === "Profile" && userDetails ? (
                <div>
                    <DetailsTable 
                        entityType="User" 
                        entity={userDetails}
                    />
                    <h3>Documents Uploaded:</h3>
                    <Button
                        linkName="Upload Document"
                        linkUrl="/entity/Doc/create"
                    />
                    <Table 
                        list = {userDetails["docs"]} 
                        download = {true} 
                        update = {true} 
                        del = {true}
                    />
                </div>
            ) : null}
            {navbarProperties === "Update" && userDetails ? (
                <div>
                    <h2>Update User</h2>
                    <DetailsForm
                        fieldType="User"
                        id={userDetails.id}
                        update={UpdateEntityConnection}
                    />
                </div>
            ) : null}
            {!userDetails ? (
                <div>
                    <p>Please Login</p>
                    <Button
                        linkName = "Login"
                        linkUrl = "/login"
                    />
                </div>
            ) : null}
        </div>
    );
}

export default ProfilePage;

// import React, { useEffect, useState } from "react";
// import UserDetailConnection from "../connections/UserDetailConnection";
// import { User } from "../constants/Types";
// import Table from "../components/Table";
// import Button from "../components/Button";
// import DetailsTable from "../components/DetailsTable";
// import DetailsForm from "../components/DetailsForm";
// import UpdateEntityConnection from "../connections/UpdateEntityConnection";
// import Navbar from "../components/Navbar";

// const ProfilePage: React.FC = () => {
//     const [navbarProperties, setNavbarProperties] = useState("Profile")
//     const [userDetails, setUserDetails] = useState<User | undefined>(undefined);

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             const fetchedDetails = await UserDetailConnection();
//             setUserDetails(fetchedDetails);
//         };

//         fetchUserDetails();
//     }, []);

//     return (
//         <div>
//             <Navbar
//                 options={["Profile", "Update"]}
//                 onSelectEntity = {setNavbarProperties}
//             />
//             {userDetails ? (
//                 <div>
//                     <DetailsTable 
//                         entityType="User" 
//                         entity={userDetails}
//                     />
//                     <DetailsForm
//                         fieldType="User"
//                         func={UpdateEntityConnection}
//                     />
//                     <Table 
//                         list = {userDetails["docs"]} 
//                         download = {true} 
//                         update = {true} 
//                         del = {true}
//                     />
//                 </div>
//             ) : (
//                 <div>
//                     <p>Please Login</p>
//                     <Button
//                         linkName = "Login"
//                         linkUrl = "/login"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProfilePage;