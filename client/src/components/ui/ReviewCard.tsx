import { BiSolidQuoteAltLeft } from "react-icons/bi";


export function ReviewCard(props){
    return(
        <div className="border border-gray-200 max-w-sm p-6 shadow rounded-2xl">
            <div className="text-[#4C38E3]">
                {
                    <BiSolidQuoteAltLeft size={32}/>
                }
            </div>
            <div className="text-base text-start font-medium my-4 text-gray-800">
                {
                    props.desc
                }
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <img className="h-14 w-14 rounded-full object-cover" src={props.image} alt="" />
                </div>
                <div>
                    <div className="text-lg font-semibold text-start">
                        {
                            props.name
                        }
                    </div>
                    <div className="font-normal text-gray-600">
                        {
                            props.profession
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}