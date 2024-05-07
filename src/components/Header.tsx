import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<{
    heading: string,
    paragraph: string,
    linkName?: string,
    linkUrl?: string,
}> = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
    return (
        <div className="flex items-center mb-2">
            <div className="mr-4">
                <Link to={"/"}>
                    <img 
                        alt=""
                        className="h-auto max-h-14 max-w-full"
                        src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
                        // onClick={() => navigate("/")}
                        // src="..\assets\pngtree-open-book-flat-design-png-image_4124286.jpg"
                    />
                </Link>
            </div>
            <div>
                <h2 className="mt-2 mb-2 text-left text-4xl font-extrabold text-gray-200">
                    {heading}
                </h2>
                <p className="text-left text-sm text-gray-400">
                    {paragraph} {" "}
                    <Link to={linkUrl} className="text-emerald-500  hover:text-emerald-700">
                        {linkName}
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom"

// const Header: React.FC<{
//     heading: string;
//     paragraph: string;
//     linkName: string;
//     linkUrl: string;
// }> = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
//     return (
//         <div className = "mb-10 ">
//             <div className = "flex-shrink-0 mr-4">
//                 <img 
//                     alt=""
//                     className="h-14 w-14"
//                     src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
//             </div>
//             <h2 className = "flex-shrink` text-3xl font-extrabold text-gray-900">
//                 {heading}
//             </h2>
//             <p className = "text-sm text-gray-600">
//                 {paragraph} {" "}
//                 <Link to = {linkUrl} className = "font-medium">
//                     {linkName}
//                 </Link>
//             </p>
//         </div>
//     );
// }

// export default Header;