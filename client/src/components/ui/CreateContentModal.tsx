import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"


export function CreateContentModal({open, onClose}){
    return (
        <div>
            {open && <div className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0">
                <div className=" bg-white p-4 rounded">
                    <div onClick={onClose} className=" flex justify-end cursor-pointer">
                        <CloseIcon />
                    </div>
                    <div className="flex flex-col gap-2 mt-2 p-2">
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center mt-2">
                        <Button variant="primary" size="md" text={"Submit"} />
                    </div>
                </div>
            </div>}

        </div>
    )
}

function Input({onChange,placeholder}:{onChange:()=>void}){
    return(
        <div>
            <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded" onChange={onChange}/>
        </div>
    )
}