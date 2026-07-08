
import {Button} from '../components/ui/Button';
import { PlusIcon } from '../components/icons/PlusIcon';
import "../index.css"; 
import { ShareIcon } from '../components/icons/ShareIcon';
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar';
import { useContent } from '../components/hooks/useContent';
import { ShareContentModel } from '../components/ui/ShareContentModel';
import { Navigate, } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { DashboardShimmer } from '../components/Shimmer/DashboardShimmer';
import { Slide, toast } from 'react-toastify';
import { LuBrainCircuit } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { ThemeToggle } from '../components/ui/ThemeToggle';



export const Dashboard = () => {
  const [openModal, setOpneModal] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const {contents,refresh, trashRefresh, trashContent,loading} = useContent();
  const [hash, setHash] = useState("");
  const [filter, setFilter] = useState("all");
  const [ authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  type User = {
  name: string;
  email: string;
  avatar: string;
};
  const [user, setUser] = useState<User >()


async function verifyUser(){
      try{
        const res = await axios.get(`${BACKEND_URL}/api/v1/me`,
        {
          withCredentials : true
        }
      );
      setUser(res.data.user)
      setAuthenticated(true);
      }catch(err){
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setAuthenticated(false)
      }
     }
  
  useEffect(()=>{

     verifyUser();
  },[])



if(authenticated == false){
    return <Navigate to={"/auth/google"} replace/>
  }

  if(authenticated == null || loading){
    return  <DashboardShimmer/> 
  }
  

  



  const filteredContent = filter == "trash" 
                          ? trashContent 
                          : filter == "all" 
                          ? contents
                          : contents.filter((item:any)=>item.type === filter);

// @ts-ignore

  async function shareBrain(){
      try{

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {"share" : true}, {withCredentials : true})
        setHash(response.data.hash)
        setShareModel(true);
        toast("Link create successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
      }catch(err){
        toast("Internal Server Error", {
                position : "bottom-right",
                theme : "colored",
                type : "error", 
                transition: Slide,
                autoClose : 3000
            })
      }
    }

    


  return (
  
    <div className='bg-[#F9FBFC] dark:bg-linear-to-bl from-slate-900 to-blue-900 w-full h-auto p-4  '>
        <div className='h-screen hidden md:block w-72 bg-white border border-gray-200 dark:border-none  top-0 left-0 fixed dark:bg-linear-to-bl from-slate-800 to-blue-900'>{
           <Sidebar 
                filter={filter} 
                setFilter={setFilter} 
                username={user?.name ?? "User"} 
                loggedout={true}/>
          }
            

        </div>

   <div className='p-4 md:ml-72 sm:pl-10 h-1vh '>
    <CreateContentModal open={openModal} onClose={()=>{setOpneModal(false)}} refresh={refresh}/>
    <ShareContentModel hash={hash} open={shareModel} onClose={()=>{setShareModel(false)}} />

      {/* Navbar  */}
      <div className='md:hidden mb-4 flex justify-between'>
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
        <div className='flex items-center gap-2'>
          <Button 
          onClick={()=>{setOpneModal(true)}}
          variant='primary'
          size="sm" 
          text="" 
          startIcon={<PlusIcon size='md'/>}
    ></Button>
   <Button 
          onClick={shareBrain}
          variant='secondary'
          size="sm" 
          text=" " 
          startIcon={<ShareIcon size='md'/>}
    ></Button>
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
                username={user.name ?? 'User'} 
                loggedout={true}
                onClose={()=>setSidebarOpen(false)}
                />
                
          </div>
                  
      </div>


   <div className=' mr-8'>
    {
      filter=="trash" ? <div 
                className='bg-red-100 p-4 w-full rounded-4xl text-center text-sm'>
         <span className='text-xl font-medium'>Caution:</span> Items moved to Trash will be permanently deleted after 30 days. You can restore them anytime before then.</div>
      : <div className='md:flex justify-end hidden gap-4 py-4 px-4'>
        <Button 
          style='text-white'
          onClick={()=>{setOpneModal(true)}}
          variant='primary'
          size="md" 
          text="Add Content" 
          startIcon={<PlusIcon size='md'/>}
    ></Button>
   <Button 
          onClick={shareBrain}
          variant='secondary'
          size="md" 
          text="Share Brain" 
          startIcon={<ShareIcon size='md'/>}
    ></Button>
    <div>
      <ThemeToggle/>
    </div>
     <div className='h-14 w-14  text-[#fafafa] rounded-full overflow-hidden'>
        <img className='cursor-pointer' src={"https://lh3.googleusercontent.com/a/ACg8ocK1k-JYXNg29MDFm1bfosYBY9WQxpXESbeMg05qoIzeE4HgFc8=s96-c"} alt="" />
     </div>
      </div>
    }
   
  </div>
        {
          filteredContent.length > 0 ?  <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8'> {
      filteredContent.map(({title,type,link, _id, metadata, createdAt})=><Card 
                key={_id} 
                title={title} 
                type={type}
                _id={_id}
                metadata={metadata} 
                link={link}
                refresh={refresh} 
                trashRefresh={trashRefresh}
                createdAt={createdAt}
                isTrash={filter=="trash"? true : false}
                />
                
              )
      }
    </div> 
    : <div className='dark:text-white h-[84vh] flex items-center justify-center text-xl font-medium'>
          {
            filter === "trash"
                  ? "Trash is empty"
                  : filter === "all"
                  ? "No content available yet."
                  : `No ${filter} content found`
                        }
      </div>
        }
    
   </div>
   </div>
  )
}
