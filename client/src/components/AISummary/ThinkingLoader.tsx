import { useEffect, useState } from "react";

const messages = [
    "Thinking...",
    "Reading your content...",
    "Finding important points...",
    "Creating your summary...",
    "Almost ready..."
];

function ThinkingLoader() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === messages.length - 1) {
                    return prev;
                }

                return prev + 1;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="flex items-center gap-2">
            <div className="h-4 w-4 border-2 border-t-transparent rounded-full border-green-500 animate-spin"></div>
            <p>{messages[index]}</p>
            </div>

            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton short"></div>
        </div>
    );
}

export default ThinkingLoader;