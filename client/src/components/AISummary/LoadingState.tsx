import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LoadingState() {
    return (
        <div className="flex h-full flex-col items-center justify-center px-8">

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    mb-8

                    flex
                    h-20
                    w-20
                    items-center
                    justify-center

                    rounded-full

                    bg-violet-500/10
                "
            >
                <Sparkles
                    className="
                        h-9
                        w-9
                        text-violet-500
                    "
                />
            </motion.div>

            <h2 className="text-2xl font-bold dark:text-white">
                AI is reading your article
            </h2>

            <p className="mt-3 max-w-md text-center text-zinc-500">
                Extracting important concepts, generating summaries,
                keywords and practical action items...
            </p>

            <div className="mt-10 flex gap-2">

                {[0,1,2].map(i=>(
                    <motion.div
                        key={i}
                        animate={{
                            y:[0,-8,0]
                        }}
                        transition={{
                            duration:.8,
                            repeat:Infinity,
                            delay:i*.15
                        }}
                        className="
                            h-3
                            w-3
                            rounded-full
                            bg-violet-500
                        "
                    />
                ))}

            </div>

        </div>
    );
}