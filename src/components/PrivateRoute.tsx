// import React from "react";
// import CheckTokenExpiration from "../utilities/CheckTokenExpiration";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = async ({ children }) => {
//     const token = localStorage.getItem("token");
//     const notExpired = async () => {return await CheckTokenExpiration();}
//     return (
//         token && await notExpired() ? children : <Navigate to = {"/HomePage"} />
//     );
// }

// export default PrivateRoute;