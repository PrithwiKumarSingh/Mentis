
import {Button} from './components/ui/Button';
import { PlusIcon } from './components/icons/PlusIcon';
import "./index.css"
const App = () => {
  return (
   <>
   <Button size="lg" text="Shere" ></Button>
   <Button size="md" text="Shere" ></Button>
   <Button size="sm" text="shere"></Button>

   <PlusIcon size="sm"></PlusIcon>
   <PlusIcon size="md"></PlusIcon>
   <PlusIcon size="lg"></PlusIcon>
   
   </>
  )
}

export default App