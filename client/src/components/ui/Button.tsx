import type { ReactElement } from "react";

interface ButtonProps  {
    variant : "primary" | "secondary" | "danger";
    size : "sm" | "md" | "lg";
    text : string | ReactElement; 
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick? : ()=>void;
    fullWidth? : boolean;
    loading? : boolean;
}
const VariantClasses = {
    "primary" : "bg-[#5046E4] text-white",
    "secondary" : "bg-[#E0E7FF] text-[#4138B8] ",
    "danger": "bg-red-500 text-white hover:bg-red-600",
}
const sizeStyles = {
    "lg" : "px-8 py-4 text-xl",
    "md" : "px-4 py-3 text-xl", 
    "sm" : "px-2 py-1 text-sm"
}
const defaultStyle = " flex items-center rounded-xl gap-2 transition-all durataion-200 "

export function Button(props:ButtonProps){

    return <button disabled={props.loading} onClick={props.onClick} 
            className={`
                    ${sizeStyles[props.size]}
                    ${defaultStyle}
                    ${VariantClasses[props.variant]}
                    ${props.loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
                    ${props.fullWidth ? "w-full justify-center" : ""}
                `}>
        {props.startIcon}
        {props.text}
        {props.loading ? <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : props.endIcon}
        </button>
}
