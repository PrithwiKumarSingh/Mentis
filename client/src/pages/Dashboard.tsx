
import {Button} from '../components/ui/Button';
import { PlusIcon } from '../components/icons/PlusIcon';
import "../index.css"
import { ShareIcon } from '../components/icons/ShareIcon';
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar';



export const Dashboard = () => {
  const [openModal, setOpneModal] = useState(false);
  return (

    <div>
        <div className='h-screen w-72 bg-white border border-gray-200 flex top-0 left-0 fixed'>
            <Sidebar/>
        </div>

   <div className='p-4 ml-72 pl-10 bg-[#F9FBFC]'>
    <CreateContentModal open={openModal} onClose={()=>{setOpneModal(false)}}/>
   <div className='flex justify-end  gap-2'>
   <Button 
          onClick={()=>{setOpneModal(true)}}
          variant='primary'
          size="md" 
          text="Add Content" 
          startIcon={<PlusIcon size='md'/>}
    ></Button>
   <Button 
          variant='secondary'
          size="md" 
          text="Share Brain" 
          startIcon={<ShareIcon size='md'/>}
    ></Button>
  </div>

    <div className='flex gap-8'>
    <Card title={"progress tweets"} type={"tweets"} link={"https://x.com/PrithwiSingh_/status/2061805759932072095?s=20"} />
    <Card title={"New projet Ideas"} type="youtube" link={"https://www.youtube.com/embed/iNJ7z4YLQFk?si=mtIPRTuGMg-8yA4y"} />
    </div>
   </div>
   </div>
  )
}
