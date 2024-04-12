import React from "react";

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
                <button type={action} onClick={handleSubmit}>
                    {text}
                </button>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default FormAction;
