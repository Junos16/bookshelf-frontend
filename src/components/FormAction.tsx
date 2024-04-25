import React from "react";
import Button from "./Button";

const FormAction: React.FC<{
    handleSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: string;
    action?: "button" | "submit" | "reset" | undefined;
    text: string;
}> = ({
    handleSubmit,
    type = "Button",
    action = "submit",
    text
}) => {
    return (
        <div>
            {type === "Button" ? (
                // <button type={action} onClick={handleSubmit}>
                //     {text}
                // </button>
                <Button
                    linkName={text}
                    action={action}
                    func={()=>handleSubmit}
                    customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4 mt-4"
                />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default FormAction;
