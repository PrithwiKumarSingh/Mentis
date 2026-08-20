import { motion } from "framer-motion";
import {
    BookOpen,
    Sparkles,
} from "lucide-react";

import Typewriter from "./Typewriter";
import ThinkingLoader from "./ThinkingLoader";

interface Summary {
    short: string;
    detailed: string;
    bullets: string[];
    keywords: string[];
    actionItems: string[];
}

interface OverviewTabProps {
    summary: Summary;
}

export default function OverviewTab({
    summary,
}: OverviewTabProps) {

    return (

        <div className="space-y-8">

            {/* Hero */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: .4,
                }}
                className="
                    overflow-hidden
                    rounded-3xl
                    border

                    border-zinc-200
                    bg-white

                    shadow-sm

                    dark:border-zinc-800
                    dark:bg-black/10
                "
            >

                {/* Header */}

                <div
                    className="
                        border-b

                        border-zinc-200

                        bg-gradient-to-r

                        from-violet-500/10
                        via-fuchsia-500/10
                        to-cyan-500/10

                        px-6
                        py-5

                        dark:border-zinc-800
                    "
                >

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl

                                bg-violet-500/10
                            "
                        >
                            <Sparkles
                                className="
                                    h-6
                                    w-6
                                    text-violet-500
                                "
                            />
                        </div>

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold

                                    text-zinc-900

                                    dark:text-white
                                "
                            >
                                Overview
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm

                                    text-zinc-500
                                "
                            >
                                A concise explanation of the saved content.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Body */}

                <div className="p-7 text-slate-200">
                    {
                        summary.short ? <Typewriter
                        text={summary.short}
                        speed={12}
                    /> 
                    : <ThinkingLoader/>
                    }

                     

                </div>

            </motion.div>

            {/* Detailed Summary */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: .2,
                }}
                className="
                    rounded-3xl
                    border
                    overflow-hidden

                    border-zinc-200
                    bg-white

                    shadow-sm

                    dark:border-zinc-800
                    dark:bg-[#1F1438]
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3

                        border-b

                        border-zinc-200

                        px-6
                        py-5

                        dark:border-zinc-800
                       dark:bg-black/10
                    "
                >

                    <BookOpen
                        className="
                            h-5
                            w-5
                `           
                            text-violet-500
                        "
                    />

                    <h3
                        className="
                            font-semibold

                            text-zinc-900
                            dark:text-white
                        "
                    >
                        Detailed Explanation
                    </h3>

                </div>

                    <div className="p-7 dark:bg-[#0A0D20]">

                    <p
                        className="
                            whitespace-pre-wrap

                            leading-8

                            text-zinc-600

                            dark:text-zinc-300
                        "
                    >
                    {
                        summary.detailed  ?  <Typewriter
                            text={summary.detailed}
                            speed={10}
                        /> : <ThinkingLoader/>
                    }
                    </p>

                </div>

            </motion.div>

            {/* Bottom Note */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: .4,
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
                    This summary is generated from the extracted article
                    content and is intended to provide a quick overview.
                    For complete context, refer to the original article.
                </p>

            </motion.div>

        </div>

    );

}