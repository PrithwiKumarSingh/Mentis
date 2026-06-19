
import { useParams } from "react-router-dom"
import {Sidebar} from "../components/ui/Sidebar"
import { BACKEND_URL } from "../config"
import axios from "axios";
import { useEffect, useState } from "react";
import {Card} from "../components/ui/Card"
import { DashboardShimmer } from "../components/Shimmer/DashboardShimmer";

interface Content {
    _id: string;
    title: string;
    type: string;
    link: string;
    metadata?: {
        title?: string;
        description?: string;
        image?: string;
    };
}

interface BrainData {
    username: string;
    content: Content[];
}

export function ShareBrain(){

const [filter, setFilter] = useState("all");
    function getFirstName(name) {
  const firstName = name.split(" ")[0];
  

  return (
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase()
  );
}


    const [brainData, setBrainData] = useState <BrainData | null>(null)

    const {hash} = useParams()
    console.log(hash);

    useEffect(()=>{
        async function BrainData(){
         const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
         console.log(response);
         setBrainData(response.data);
            }

            BrainData();
    },[])

    if(!brainData){
        return <DashboardShimmer/>
    }

    const filteredContent = filter == "all" ? brainData.content : brainData.content.filter((item:any)=>item.type === filter);
       
    
    return(
        <div>
            <div className='h-screen w-72 bg-white border border-gray-200 flex top-0 left-0 fixed'>
            <Sidebar filter={filter} setFilter={setFilter} loggedout={false} />
        </div>
        <div className='p-4 ml-72 pl-10 bg-[#F9FBFC] h-screen'>
            <div className="flex justify-between px-8 mt-4 ">
                <div className="bg-[#E0E7FF] px-4 py-2 rounded font-medium text-[#4138BA] ">
                    {
                        
                        `Welcome to ${getFirstName(brainData.username)}'s Digital Brain`
                    }
                </div>
                <div className="bg-[#E0E7FF] px-4 py-2 rounded text-[#4138BA] cursor-pointer font-bold hover:scale-x-105 transition-all duration-150">
                    {
                        
                        "Save Brain"
                    }
                </div>
            </div>
        <div className='grid grid-cols-4 gap-8 p-8'> {
        filteredContent.map(({title,type,link, _id, metadata})=><Card
                    key={_id} 
                    title={title} 
                    type={type}
                    _id={_id}
                    metadata={metadata} 
                    link={link} />
                )
        }
        </div>
        </div>
        </div>
    )
}