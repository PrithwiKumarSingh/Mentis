
interface YoutubeProps{
    link : string;
}

export function Youtube({link}:YoutubeProps){
    return(
        <iframe 
                className="w-full mt-4 h-[230px] rounded-2xl max-w-78"
                width="560" 
                height="315" 
                src={link.replace("watch?v=","embed/")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
    )
}

