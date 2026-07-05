import type { ReactElement } from "react";

interface SocalMediaIconProps{
    Icon : ReactElement;
    url : string;
    color : string;

}

const SocalMedia = "cursor-pointer hover:scale-105 transition-all duration-150 "

export function SocalMediaIcon({Icon, url, color}:SocalMediaIconProps){
    return (
        <div className={`${SocalMedia}`+ " " + color}>
                            <a href={url} target="_blank">
                                {
                                    Icon
                                }
                            </a>
                        </div>
    )
}