
import { useParams } from "react-router-dom"
import {Sidebar} from "../components/ui/Sidebar"
import { BACKEND_URL } from "../config"
import axios from "axios";
import { useEffect, useState } from "react";
import {Card} from "../components/ui/Card"
import { DashboardShimmer } from "../components/Shimmer/DashboardShimmer";
import { LuBrainCircuit } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
  


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
    createdAt:string;
}

interface BrainData {
    username: string;
    content: Content[];
}

export function ShareBrain(){
const [sidebarOpen, setSidebarOpen] = useState(false);
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
            <div className='hidden md:block h-screen w-72 bg-white border border-gray-200 top-0 left-0 fixed'>
            <Sidebar filter={filter} setFilter={setFilter} loggedout={false} />
        </div>
        
        <div className='p-4 md:p-16 md:ml-72 pl-10 bg-[#F9FBFC] h-screen'>
            <div className='md:hidden my-8 flex justify-between'>
                <div onClick={()=>setSidebarOpen(true)}>
                  {
                    <MdMenu size={32} />
                  }
                </div>
                <div className='flex items-center gap-1'>
                  <div className='text-blue-700'>
                  {
                    <LuBrainCircuit size={30}/>
                  }
                </div>
                <div className='text-3xl font-semibold'>
                  Mentis
                </div>
                </div>
                <div className="bg-[#E0E7FF] px-4 py-2 rounded text-[#4138BA] cursor-pointer font-bold hover:scale-x-105 transition-all duration-150">
                    {
                        
                        "Save Brain"
                    }
                </div>
                <div
                    className={`
                      fixed top-0 left-0 h-screen w-72 bg-white z-50
                      transform transition-transform duration-300
                      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    `}
                  >
                    <Sidebar 
                        filter={filter} 
                        setFilter={setFilter} 
                        onClose={()=>setSidebarOpen(false)}
                        />
                        
                  </div>
                          
              </div>
            <div className="flex justify-between  mt-4 ">
                <div className="bg-[#E0E7FF] px-4 py-2 rounded font-medium text-[#4138BA] ">
                    {
                        
                        `Welcome to ${getFirstName(brainData.username)}'s Digital Brain`
                    }
                </div>
                <div className="hidden md:block bg-[#E0E7FF] px-4 py-2 rounded text-[#4138BA] cursor-pointer font-bold hover:scale-x-105 transition-all duration-150">
                    {
                        
                        "Save Brain"
                    }
                </div>
                
            </div>
        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-6 md:mt-10'> {
        filteredContent.map(({title,type,link, _id, metadata, createdAt})=><Card
                    key={_id} 
                    title={title} 
                    type={type}
                    _id={_id}
                    metadata={metadata} 
                    link={link}
                    createdAt={createdAt}
                     />
                )
        }
        </div>
        </div>
        </div>
    )
}