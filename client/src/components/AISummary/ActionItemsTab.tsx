import { motion } from "framer-motion";
import { Hash, Sparkles } from "lucide-react";

interface KeywordsTabProps {
    keywords: string[];
}

export default function KeywordsTab({
    keywords,
}: KeywordsTabProps) {
    if (!keywords.length) {
        return (
            <EmptyState />
        );
    }

    return (
        <div className="space-y-8">

            {/* Header */}

            <div>

                <div className="flex items-center gap-3">

                    <div
                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                    "
                    >
                        <Hash className="h-5 w-5 text-violet-500" />
                    </div>

                    <div>

                        <h2
                            className="
                            text-2xl
                            font-bold
                            text-zinc-900
                            dark:text-white
                        "
                        >
                            Action Items
                        </h2>

                        <p
                            className="
                            mt-1
                            text-sm
                            text-zinc-500
                        "
                        >
                            Important technologies and concepts extracted
                            from the article.
                        </p>

                    </div>

                </div>

            </div>

            {/* Chips */}

            <div className="flex flex-wrap gap-4">

                {keywords.map((keyword, index) => (

                    <motion.button
                        key={keyword}
                        initial={{
                            opacity: 0,
                            scale: .8,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * .05,
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: .95,
                        }}
                        className="
                            group

                            flex
                            items-center
                            gap-2

                            rounded-full

                            border

                            border-zinc-200

                            bg-white

                            px-5
                            py-3

                            text-sm
                            font-medium

                            shadow-sm

                            transition-all

                            hover:border-violet-500

                            hover:bg-violet-500/10

                            dark:border-zinc-700
                            dark:bg-[#0A1022]
                        "
                    >

                        <Sparkles
                            className="
                            h-4
                            w-4

                            text-violet-500
                        "
                        />

                        <span
                            className="
                            text-zinc-700

                            group-hover:text-violet-600

                            dark:text-zinc-300
                        "
                        >
                            {keyword}
                        </span>

                    </motion.button>

                ))}

            </div>

            {/* Footer */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: .5,
                }}
                className="
                    rounded-2xl

                    border

                    border-dashed

                    border-violet-300

                    bg-violet-500/5

                    p-5

                    dark:border-violet-700
                "
            >

                <p
                    className="
                    text-sm

                    leading-7

                    text-violet-700

                    dark:text-violet-300
                "
                >
                    Keywords help you quickly understand the
                    article's main topics and make future
                    searching easier.
                </p>

            </motion.div>

        </div>
    );
}

function EmptyState() {

    return (

        <div
            className="
            flex
            h-[300px]
            items-center
            justify-center

            rounded-3xl

            border

            border-dashed

            border-zinc-300

            dark:border-zinc-700
        "
        >

            <p
                className="
                text-zinc-500
            "
            >
                No keywords available.
            </p>

        </div>

    );

}