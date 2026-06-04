import type { ReactElement } from "react";

interface ButtonProps  {
    size : "sm" | "md" | "lg";
    text : String; 
    startIcon? : ReactElement;
    endIcon? : ReactElement;
}

const sizeStyles = {
    "lg" : "px-8 py-4 text-xl",
    "md" : "px-4 py-2 text-md", 
    "sm" : "px-2 py-1 text-sm"
}

export function Button(props:ButtonProps){

    return <button className={sizeStyles[props.size] + " bg-red-300"}>
        {props.text}
        </button>
}
 
{/* <Button variant="primary" size="md" text={"flksdjfl"} onClick={()=>{}}></Button> */}