
import {Button} from '../components/ui/Button';
import { PlusIcon } from '../components/icons/PlusIcon';
import "../index.css"
import { ShareIcon } from '../components/icons/ShareIcon';
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar';
import { useContent } from '../components/hooks/useContent';
import { ShareContentModel } from '../components/ui/ShareContentModel';
import { Navigate, } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';



export const Dashboard = () => {
  const [openModal, setOpneModal] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const {contents,refresh, loading} = useContent();
  const [hash, setHash] = useState("");

  const token = localStorage.getItem("token");
  if(!token){
    return <Navigate to={"/signin"} replace/>
  }

  if(loading){
    return <div className='flex items-center justify-center font-bold text-3xl '>
        Loading....
    </div>
  }
// @ts-ignore
  const username = localStorage.getItem("username") || "U";
  console.log(username)

  async function shareBrain(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {"share" : true}, {withCredentials : true})
        console.log(response.data);
        setHash(response.data.hash)
        setShareModel(true);
    }


  return (

    <div>
        <div className='h-screen w-72 bg-white border border-gray-200 flex top-0 left-0 fixed'>
            <Sidebar username={username} loggedout={true}/>

        </div>

   <div className='p-4 ml-72 pl-10 bg-[#F9FBFC] h-screen'>
    <CreateContentModal open={openModal} onClose={()=>{setOpneModal(false)}} refresh={refresh}/>
    <ShareContentModel hash={hash} open={shareModel} onClose={()=>{setShareModel(false)}} />
   <div className='flex justify-end  gap-2 mt-4 mr-8'>
   <Button 
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
     <div className='px-5 py-2 flex items-center justify-center text-2xl font-medium cursor-pointer bg-[#5046E4] text-[#fafafa] rounded-full'>
        {
          username?.charAt(0)?.toUpperCase() || "U"
        }
     </div>
  </div>

    <div className='grid grid-cols-4 gap-8 p-8'> {
      contents.map(({title,type,link, _id, metadata})=><Card 
                key={_id} 
                title={title} 
                type={type}
                _id={_id}
                metadata={metadata} 
                link={link}
                refresh={refresh} />
              )
      }
    </div>
   </div>
   </div>
  )
}
