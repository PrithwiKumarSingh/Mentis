import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Check,
    Copy,
    FileText,
} from "lucide-react";

interface DetailsTabProps {
    detailed: string;
}

export default function DetailsTab({
    detailed,
}: DetailsTabProps) {
    const [copied, setCopied] = useState(false);

    const paragraphs = useMemo(() => {
        return detailed
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(Boolean);
    }, [detailed]);

    async function copySummary() {
        try {
            await navigator.clipboard.writeText(detailed);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error(err);
        }
    }

    if (!detailed.trim()) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-8 ">

            {/* Header */}

            <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-4">

                    <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                    "
                    >
                        <FileText
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
                            text-2xl
                            font-bold
                            text-zinc-900
                            dark:text-white
                        "
                        >
                            Detailed Summary
                        </h2>

                        <p
                            className="
                            mt-1
                            text-sm
                            text-zinc-500
                        "
                        >
                            Complete AI generated explanation.
                        </p>

                    </div>

                </div>

                <button
                    onClick={copySummary}
                    className="
                    flex
                    items-center
                    gap-2

                    rounded-xl

                    border

                    border-zinc-200

                    px-4
                    py-2

                    text-sm
                    font-medium

                    transition

                    hover:bg-zinc-100

                    dark:border-zinc-700
                    dark:hover:bg-zinc-800
                "
                >
                    {copied ? (
                        <div className="dark:text-white flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            Copied
                        </div>
                    ) : (
                        <div className="dark:text-white flex gap-2 items-center cursor-pointer">
                            <Copy className="h-4 w-4 dark:text-white" />
                            Copy
                        </div>
                    )}
                </button>

            </div>

            {/* Content */}

            <div
                className="
                rounded-3xl

                border

                border-zinc-200

                bg-white

                p-8

                shadow-sm

                dark:border-zinc-800
                dark:bg-[#0A1022]
            "
            >

                <div className="space-y-8">

                    {paragraphs.map((paragraph, index) => (

                        <motion.p
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * .08,
                            }}
                            className="
                                leading-8

                                text-zinc-700

                                dark:text-zinc-300
                            "
                        >
                            {paragraph}
                        </motion.p>

                    ))}

                </div>

            </div>

            {/* Footer */}

            <div
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
                    This explanation is AI-generated from the extracted
                    content. Consider reviewing the original article for
                    complete technical details and examples.
                </p>

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

            <p className="text-zinc-500">
                No detailed summary available.
            </p>

        </div>

    );

}