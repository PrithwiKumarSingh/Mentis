
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



export const Dashboard = () => {
  const [openModal, setOpneModal] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const {contents,refresh} = useContent();
  return (

    <div>
        <div className='h-screen w-72 bg-white border border-gray-200 flex top-0 left-0 fixed'>
            <Sidebar/>

        </div>

   <div className='p-4 ml-72 pl-10 bg-[#F9FBFC]'>
    <CreateContentModal open={openModal} onClose={()=>{setOpneModal(false)}} refresh={refresh}/>
    <ShareContentModel open={shareModel} onClose={()=>{setShareModel(false)}} />
   <div className='flex justify-end  gap-2 mt-4 mr-8'>
   <Button 
          onClick={()=>{setOpneModal(true)}}
          variant='primary'
          size="md" 
          text="Add Content" 
          startIcon={<PlusIcon size='md'/>}
    ></Button>
   <Button 
          onClick={()=>{setShareModel(true)}}
          variant='secondary'
          size="md" 
          text="Share Brain" 
          startIcon={<ShareIcon size='md'/>}
    ></Button>
  </div>

    <div className='grid grid-cols-4 gap-8 p-8'> {
      contents.map(({title,type,link, _id, metadata})=><Card 
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
