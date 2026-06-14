import type { ReactElement } from "react";

interface SocalMediaIconProps{
    Icon : ReactElement;
    url : string;

}

const SocalMedia = "cursor-pointer hover:scale-105 transition-all duration-150"

export function SocalMediaIcon({Icon, url}:SocalMediaIconProps){
    return (
        <div className={`${SocalMedia}`+" text-green-600"}>
                            <a href={url} target="_blank">
                                {
                                    Icon
                                }
                            </a>
                        </div>
    )
}