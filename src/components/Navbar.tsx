import React from "react";
import Button from "./Button";

const Navbar: React.FC<{
    options: string[]
    onSelectEntity: (entity: string) => void
}> = ({ options, onSelectEntity }) => {
    return (
        <nav className="mt-2 mb-2 flex justify-center">
            <ul className="flex items-center space-x-4">
                {options.map(option => (
                    <li key={option} className="relative">
                        <Button 
                            linkName={option}
                            func={() => onSelectEntity(option)}
                            customClass="transition duration-300 ease-in-out bg-emerald-500 text-black font-semibold hover:bg-emerald-600 rounded-md px-3 py-1.5 shadow-md"
                        />
                    </li>
                ))}
            </ul>
        </nav>

        // <nav>
        //     <ul>
        //         {options.map(option => {
        //             return (
        //                 <li key = {option}>
        //                     {/* <button onClick={
        //                         () => onSelectEntity(option)
        //                     }>{option}</button> */}
        //                     <Button 
        //                         linkName={option}
        //                         func={()=>onSelectEntity(option)}
        //                         customClass="bg-emerald-500 text-black rounded-md px-2"
        //                     />
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // </nav>
    );
}

export default Navbar;