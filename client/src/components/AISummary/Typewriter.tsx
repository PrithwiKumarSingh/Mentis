import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
    cursor?: boolean;
    onComplete?: () => void;
}

export default function Typewriter({
    text,
    speed = 20,
    startDelay = 300,
    className = "",
    cursor = true,
    onComplete,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    // Split into actual characters
    const chars = useMemo(() => [...text], [text]);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setDisplayedText("");
        setIsFinished(false);

        let index = 0;

        const type = () => {
            if (index <= chars.length) {
                setDisplayedText(chars.slice(0, index).join(""));
                index++;

                timerRef.current = setTimeout(type, speed);
            } else {
                setIsFinished(true);
                onComplete?.();
            }
        };

        const delay = setTimeout(type, startDelay);

        return () => {
            clearTimeout(delay);

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [chars, speed, startDelay, onComplete]);

    return (
        <div
            className={`
                whitespace-pre-wrap
                leading-8
                text-zinc-700
                dark:text-zinc-300
                ${className}
            `}
        >
            {displayedText}

            {cursor && !isFinished && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                    }}
                    className="ml-1 inline-block font-semibold text-violet-500"
                >
                    |
                </motion.span>
            )}
        </div>
    );
}