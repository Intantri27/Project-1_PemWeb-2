import React from "react";

interface InputTextProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    register: any;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({
    label,
    name,
    type = "text",
    placeholder = "",
    register,
    error,
}: InputTextProps) => {
    return (
        <div className="block mb-1 font-medium"> 
            <label>{label}</label> 
            <input 
                type={type} 
                placeholder={placeholder} 
                {...register(name)} 
                className="w-full border p-2 rounded" 
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
        </div> 
    )
}

export default InputText;