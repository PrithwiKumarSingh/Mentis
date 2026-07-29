import { AlertTriangle } from "lucide-react";

interface Props{
    retry:()=>void;
}

export default function ErrorState({
    retry
}:Props){

    return(

        <div className="flex h-full flex-col items-center justify-center px-8">

            <AlertTriangle
                className="
                    h-16
                    w-16
                    text-red-500
                "
            />

            <h2 className="mt-6 text-2xl font-bold dark:text-white">
                Failed to generate summary
            </h2>

            <p className="mt-3 text-zinc-500 text-center max-w-md">
                Something went wrong while communicating
                with the AI service.
            </p>

            <button
                onClick={retry}
                className="
                    mt-8

                    rounded-xl

                    bg-violet-600

                    px-6
                    py-3

                    text-white

                    transition

                    hover:bg-violet-700
                "
            >
                Try Again
            </button>

        </div>

    )

}