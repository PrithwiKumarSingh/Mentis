
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
import { MdMenu } from "react-icons/md";
import ProfileDropdown from "./ProfileDropDown";
import { IoSearch } from "react-icons/io5";

export const Dashboard = () => {
  const [openModal, setOpneModal] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const {contents,refresh, trashRefresh, trashContent,loading} = useContent();
  const [hash, setHash] = useState("");
  const [filter, setFilter] = useState("all");
  const [ authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  type User = {
  name: string;
  email: string;
  avatar: string;
};
  const [user, setUser] = useState<User >()

async function verifyUser() {
  try {

    const res = await axios.get(`${BACKEND_URL}/api/v1/me`, {withCredentials:true});

    const response = await axios.get(`${BACKEND_URL}/api/v1/brain/link`, {withCredentials:true});

    setHash(response.data.hash);
    setUser(res.data.user);
    setAuthenticated(true);
  } catch (err) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setAuthenticated(false);
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

                        
  const avtar = user?.avatar || "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="


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
  
    <div className='min-h-screen bg-[#F9FBFC] dark:bg-linear-to-bl from-slate-900 to-[#06071B] w-full md:p-4  '>
        <div className='h-screen hidden md:block w-72 bg-white border border-gray-200 dark:border-none  top-0 left-0 fixed dark:bg-linear-to-bl from-[#06071B] to-[#06071B]'>{
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
      <div className='md:hidden mb-4 flex justify-between dark:text-white'>
        <div onClick={()=>setSidebarOpen(true)} className='flex items-center gap-2'>
          {
            <MdMenu size={32} />
          }
          <div className='flex items-center gap-1'>
        <div className='text-3xl font-semibold dark:text-white'>
          Mentis
        </div>
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
    <div 
        onClick={()=>setOpenProfile(prev=>!prev)}
        className='h-10 w-10 relative  group text-[#fafafa]'>
        <img className='cursor-pointer rounded-full' loading='lazy' src={avtar} alt="loading" />
        <span className="absolute -bottom-0.5 right-1 h-4 w-4 rounded-full border-2 border-[#222022] bg-green-500" />
        <div className='absolute -right-15 -top-22 z-40'> 
          { openProfile && 
        <ProfileDropdown
          user={{
            name: user?.name,
            email: user?.email,
            avatar: avtar,
            hash:hash
          }}
        />
        }
      </div>
      
     </div>
        </div>

        <div
            className={`
              fixed top-0 left-0 h-screen w-72 bg-white z-50 dark:bg-linear-to-bl from-[#06071B] to-[#06071B]
              transform transition-transform duration-300
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <Sidebar 
                filter={filter} 
                setFilter={setFilter} 
                username={user?.name ?? 'User'} 
                loggedout={true}
                onClose={()=>setSidebarOpen(false)}
                />
                
          </div>
                  
      </div>


   <div className=' mr-8'>
    {
      filter=="trash" ? <div 
                className='bg-red-100 dark:bg-white/10 text-red-500 border border-white/20 p-4 w-full rounded-4xl text-center text-sm'>
         <span className='text-xl font-medium'>Caution:</span> Items moved to Trash will be permanently deleted after 30 days. You can restore them anytime before then.</div>
      : <div className='md:flex justify-between items-center hidden gap-4 py-4 '>
        <div className='dark:text-white flex relative'>
          <input
          className='outline outline-lime-50 rounded px-2 py-2 pr-14 min-w-md truncate '
           type="text"
           placeholder='Work in progress.....'
            />
            <button className='absolute right-4 top-2 cursor-pointer'>
            <IoSearch size={22} />
            </button>
        </div>
        <div className='md:flex gap-4'>
        <Button 
          style='dark:bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all'
          onClick={()=>{setOpneModal(true)}}
          variant='primary'
          size="md" 
          text="Add Content" 
          startIcon={<PlusIcon size='md'/>}
    ></Button>
   <Button 
        style='dark:bg-white/10 dark:text-white backdrop-blur-md border border-white/20 shadow-lg transition-all' 
          onClick={shareBrain}
          variant='secondary'
          size="md" 
          text="Share Brain" 
          startIcon={<ShareIcon size='md'/>}
    ></Button>
     <div
     onClick={()=>setOpenProfile(prev=>!prev)}
     className='h-14 w-14 relative  group text-[#fafafa]'>
        <img className='cursor-pointer rounded-full' loading='lazy' src={avtar} alt="loading" />
        <span className="absolute -bottom-0.5 right-1 h-4 w-4 rounded-full border-2 border-[#222022] bg-green-500" />
        <div className='absolute -right-15 -top-22 z-40'>
          { openProfile &&
        <ProfileDropdown
          user={{
            name: user?.name,
            email: user?.email,
            avatar: avtar,
            hash:hash
          }}
        />
}

      </div>
      
     </div>
     </div>
      </div>



    }
   
  </div>
        {
          filteredContent.length > 0 ?  <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8'> {
      filteredContent.map(({title,type,link, _id, metadata, createdAt, deletedAt})=><Card 
                key={_id} 
                title={title} 
                type={type}
                _id={_id}
                metadata={metadata} 
                link={link}
                refresh={refresh} 
                trashRefresh={trashRefresh}
                createdAt={createdAt}
                deletedAt={deletedAt}
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
