import { FaBolt, FaBookmark } from "react-icons/fa6";
import { FeaturesIcons } from "../ui/ContentIcons";
import { MdPeopleAlt, MdWatchLater } from "react-icons/md";

export function Stats(){
    const Features = [
        {
            Icon: FaBookmark,
            title : "100+",
            desc : "Resources Saved"
        },
        {
            Icon: FaBolt,
            title : "100+",
            desc : "Resources Saved"
        },
        {
            Icon: MdWatchLater,
            title : "<1s",
            desc : "Search Speed"
        },
        {
            Icon: MdPeopleAlt,
            title : "10+",
            desc : "Happy Users"
        }
        
    ]
    return (
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 my-16 dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {
                            Features.map(({Icon,title, desc})=>( <FeaturesIcons
                                Icon={Icon}
                                title={title}
                                desc={desc}
                            />))
                        }
                    </div>
            </div>
    )
}