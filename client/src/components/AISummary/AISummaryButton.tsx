import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Props{
    onClick:()=>void;
}

export default function AISummaryButton({
    onClick
}:Props){

    return(

        <motion.button

            whileHover={{
                scale:1.03
            }}

            whileTap={{
                scale:.97
            }}

            onClick={onClick}

            className="
                flex
                items-center
                gap-2

                rounded-xl

                hover:text-linear-to-r

                from-violet-600
                to-fuchsia-600

                font-medium

                text-white

                shadow-lg
            "
        >

            <Sparkles className="h-5 w-5 text-violet-600 to-fuchsia-600 cursor-pointer"/>

        </motion.button>

    )

}