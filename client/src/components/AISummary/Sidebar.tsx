import {
    CalendarDays,
    Clock3,
    ExternalLink,
    FileText,
    Hash,
} from "lucide-react";

interface SidebarProps {
    title: string;
    description: string;
    wordCount: number;
    readingTime: number;
    createdAt: string;
    link?: string;
}

export default function Sidebar({
    title,
    description,
    wordCount,
    readingTime,
    createdAt,
    link,
}: SidebarProps) {
    return (
        <div className="flex h-full lg:flex-col md:flex-row  gap-5 p-5">

            {/* Article */}

            <div
                className="
                rounded-2xl
                border
                border-zinc-200
                bg-white
                p-5
                shadow-sm

                dark:border-zinc-800
                dark:bg-black/10
            "
            >
                <div className="mb-5 flex items-center gap-3">

                    <div
                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-600/10
                    "
                    >
                        <FileText
                            className="
                            h-5
                            w-5
                            text-violet-500
                        "
                        />
                    </div>

                    <div>

                        <h3
                            className="
                            font-semibold
                            text-zinc-900

                            dark:text-white
                        "
                        >
                            {title}
                        </h3>

                        <p
                            className="
                            mt-1
                            line-clamp-1
                            text-xs
                            text-zinc-500
                        "
                        >
                            Saved Content
                        </p>

                    </div>

                </div>

                <p
                    className="
                    line-clamp-5
                    text-sm
                    leading-7
                    text-zinc-600

                    dark:text-zinc-400
                "
                >
                    {description}
                </p>

                {
                    link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="
                            mt-6
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-zinc-200
                            px-4
                            py-3
                            text-sm
                            font-medium
                            transition

                            hover:bg-zinc-100

                            dark:border-zinc-700
                            dark:hover:bg-zinc-800
                        "
                        >
                            Open Original

                            <ExternalLink
                                className="h-4 w-4"
                            />
                        </a>
                    )
                }
            </div>

            {/* Meta */}

            <div
                className="
                rounded-2xl
                border
                border-zinc-200
                bg-white
                p-5
                shadow-sm

                dark:border-zinc-800
                dark:bg-black/10
            "
            >
                <h3
                    className="
                    mb-5
                    font-semibold
                    text-zinc-900

                    dark:text-white
                "
                >
                    Meta
                </h3>

                <div className="space-y-5">

                    <InfoRow
                        icon={<Hash className="h-4 w-4 dark:text-white" />}
                        label="Word Count"
                        value={wordCount.toLocaleString()}
                    />

                    <InfoRow
                        icon={<Clock3 className="h-4 w-4 dark:text-white" />}
                        label="Reading Time"
                        value={`${readingTime} min`}
                    />

                    <InfoRow
                        icon={<CalendarDays className="h-4 w-4 dark:text-white" />}
                        label="Created"
                        value={new Date(
                            createdAt
                        ).toLocaleDateString()}
                    />

                </div>
            </div>

        </div>
    );
}

interface InfoRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoRow({
    icon,
    label,
    value,
}: InfoRowProps) {
    return (
        <div className="flex items-center gap-3">

            <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg

                bg-zinc-100

                dark:bg-zinc-800
            "
            >
                {icon}
            </div>

            <div>

                <p
                    className="
                    text-xs
                    text-zinc-500
                "
                >
                    {label}
                </p>

                <p
                    className="
                    mt-1
                    font-medium

                    text-zinc-900

                    dark:text-white
                "
                >
                    {value}
                </p>

            </div>

        </div>
    );
}