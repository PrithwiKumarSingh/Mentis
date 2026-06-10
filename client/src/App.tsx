
import {Button} from './components/ui/Button';
import { PlusIcon } from './components/icons/PlusIcon';
import "./index.css"
import { ShareIcon } from './components/icons/ShareIcon';
import { Card } from './components/ui/Card';
import { CreateContentModal } from './components/ui/CreateContentModal';
import { useState } from 'react';

const App = () => {
  const [openModal, setOpneModal] = useState(true);
  return (
   <div className='p-4'>
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

    <div className='flex gap-2'>
    <Card title={"progress tweets"} type={"tweets"} link={"https://x.com/PrithwiSingh_/status/2061805759932072095?s=20"} />
    <Card title={"New projet Ideas"} type="youtube" link={"https://www.youtube.com/embed/iNJ7z4YLQFk?si=mtIPRTuGMg-8yA4y"} />
    </div>
   </div>
  )
}

export default App