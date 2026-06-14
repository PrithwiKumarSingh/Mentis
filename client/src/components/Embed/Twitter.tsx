

interface TwiiterProps{
    link : string;
}

export function Twiiter({link}:TwiiterProps){
    return (
        <blockquote className="twitter-tweet">
            <a href={link}></a> 
            </blockquote>
    )
}