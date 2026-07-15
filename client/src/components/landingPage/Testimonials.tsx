import { ReviewCard } from "../ui/ReviewCard";

export function Testimonials(){
    const reviews = [
        {
            desc:"Mentis helps me keep all my learning resources organized and easy to find.",
            name:"Anurag Sing",
            profession:"Full Stack Develper", 
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s"
        },
        {
            desc:"Mentis turns scattered information into an organized knowledge base.",
            name:"Anurag Sing",
            profession:"Backend Developer",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s"
        },
        {
            desc:"Mentis helps me stay organized while learning new technologies." ,
            name:"Anurag Sing" ,
            profession:"MCA Student" ,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s" 
        },
        {
            desc:"I can finally find my saved articles without wasting time.",
            name:"Sonu Yadav",
            profession:"Content Creator" ,
            image:"https://scontent.cdninstagram.com/v/t51.82787-19/622856001_17921996997235809_668794726188977045_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MTAuQzMifQ%3D%3D&_nc_ohc=ckcXNXtGy0gQ7kNvwGEjPA0&_nc_oc=AdoFTmTypgm6kvNHgJ2lj9Yw4LkRsNd_LIMGznc9r2SPKXXSSeFpeW_rYjkMPCxkMl4&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=MGWVizkhCdZ9_pY52kzvxw&_nc_ss=7b2a8&oh=00_AQAX0b1atW-tae-y20jxPYjphnPCB-4MbGur4eLCKv6-Ig&oe=6A5BFECF"
        }
    ]
    return (
            <div className="md:px-26 text-center">
                <div className="text-3xl font-semibold my-10">
                    Loved by learners and builders
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-center">
                    {
                        reviews.map(review =>( <ReviewCard 
                        key={review.name}
                        desc={review.desc}
                        name={review.name}
                        profession={review.profession}
                        image={review.image}
                        />))
                    }
                </div>
            </div>
    )
}