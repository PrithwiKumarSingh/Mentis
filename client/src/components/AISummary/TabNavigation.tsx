import { motion } from "framer-motion";
import {
    AlignLeft,
    CheckCircle2,
    ListChecks,
    Sparkles,
    Tags,
} from "lucide-react";

export type SummaryTab =
    | "overview"
    | "keypoints"
    | "keywords"
    | "actions"
    | "details";

interface TabNavigationProps {
    active: SummaryTab;
    onChange: (tab: SummaryTab) => void;
}

const tabs = [
    {
        id: "overview",
        label: "Overview",
        icon: Sparkles,
    },
    {
        id: "keypoints",
        label: "Key Points",
        icon: CheckCircle2,
    },
    {
        id: "keywords",
        label: "Keywords",
        icon: Tags,
    },
    {
        id: "actions",
        label: "Action Items",
        icon: ListChecks,
    },
    {
        id: "details",
        label: "Details",
        icon: AlignLeft,
    },
] satisfies {
    id: SummaryTab;
    label: string;
    icon: any;
}[];

export default function TabNavigation({
    active,
    onChange,
}: TabNavigationProps) {
    return (
        <div
            className="
            border-b
            border-zinc-200
            dark:border-zinc-800
        "
        >
            <div
                className="
                flex
                overflow-x-auto
                scrollbar-none
                px-4
                lg:px-6
            "
            >
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    const isActive =
                        active === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() =>
                                onChange(tab.id)
                            }
                            className="
                            relative
                            flex
                            shrink-0
                            items-center
                            gap-2
                            px-5
                            py-4
                            text-sm
                            font-medium
                            transition
                            cursor-pointer
                        "
                        >
                            <Icon
                                className={`
                                    h-4
                                    w-4

                                    ${
                                        isActive
                                            ? "text-violet-500"
                                            : "text-zinc-500"
                                    }
                                `}
                            />

                            <span
                                className={`
                                    ${
                                        isActive
                                            ? "text-violet-500"
                                            : "text-zinc-500 dark:text-zinc-400"
                                    }
                                `}
                            >
                                {tab.label}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="summary-tab"
                                    className="
                                    absolute
                                    bottom-0
                                    left-2
                                    right-2
                                    h-[3px]
                                    rounded-full
                                    bg-violet-500
                                "
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 35,
                                    }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}