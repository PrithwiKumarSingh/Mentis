import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
    bullets: string[];
}

export default function KeyPointsTab({
    bullets,
}: Props) {
    if (!bullets.length) {
        return (
            <EmptyState />
        );
    }

    return (
        <div className="space-y-5">

            <div>

                <h2
                    className="
                    text-2xl
                    font-bold

                    text-zinc-900
                    dark:text-white
                "
                >
                    Key Points
                </h2>

                <p
                    className="
                    mt-2
                    text-sm

                    text-zinc-500
                "
                >
                    Important ideas extracted from the
                    article.
                </p>

            </div>

            <div className="space-y-4">

                {bullets.map((point, index) => (

                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: index * .08,
                        }}
                        className="
                            group

                            flex
                            items-start
                            gap-4

                            rounded-2xl

                            border

                            border-zinc-200

                            bg-white

                            p-5

                            shadow-sm

                            transition-all

                            hover:-translate-y-1

                            hover:shadow-lg

                            dark:border-zinc-800
                            dark:bg-[#1E1637]
                        "
                    >

                        <div
                            className="
                                mt-1

                                flex

                                h-9

                                w-9

                                shrink-0

                                items-center

                                justify-center

                                rounded-full

                                bg-violet-500/10
                            "
                        >

                            <CheckCircle2
                                className="
                                    h-5
                                    w-5
                                    text-violet-500
                                "
                            />

                        </div>

                        <p
                            className="
                                leading-7

                                text-zinc-700

                                dark:text-zinc-300
                            "
                        >
                            {point}
                        </p>

                    </motion.div>

                ))}

            </div>

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
                No key points available.
            </p>

        </div>

    );

}