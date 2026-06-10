import type { ReactElement } from "react";

interface ButtonProps  {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : String | ReactElement; 
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick? : ()=>void;
}
const VariantClasses = {
    "primary" : "bg-[#5046E4] text-white",
    "secondary" : "bg-[#E0E7FF] text-[#4138B8] "
}
const sizeStyles = {
    "lg" : "px-8 py-4 text-xl",
    "md" : "px-4 py-3 text-xl", 
    "sm" : "px-2 py-1 text-sm"
}
const defaultStyle = "flex items-center rounded-xl gap-2 cursor-pointer"

export function Button(props:ButtonProps){

    return <button onClick={props.onClick} className={sizeStyles[props.size] + " " + defaultStyle + " " +VariantClasses[props.variant] }>
        {props.startIcon}
        {props.text}
        {props.endIcon}
        </button>
}
 
{/* <Button variant="primary" size="md" text={"flksdjfl"} onClick={()=>{}}></Button> */}