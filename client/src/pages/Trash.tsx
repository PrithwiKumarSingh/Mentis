

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


export function Trash(){

    const {contents,refresh, trashRefresh, trashContent,loading} = useContent();
    return(
        <div className='bg-[#F9FBFC] h-screen p-4 relative'>
                <div className='h-screen hidden md:block w-72 bg-white border border-gray-200  top-0 left-0 fixed'>{
                   <Sidebar 
                        setFilter={setFilter} 
                        username={username} 
                        loggedout={true}/>
                  }
                    
        
                </div>
        
           <div className='p-4 md:ml-72 sm:pl-10 bg-[#F9FBFC] h-1vh'>
                {
                  trashContent.length > 0 ?  <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8'> {
              trashContent.map(({title,type,link, _id, metadata, createdAt})=><Card 
                        key={_id} 
                        title={title} 
                        type={type}
                        _id={_id}
                        metadata={metadata} 
                        link={link}
                        refresh={refresh} 
                        trashRefresh={trashRefresh}
                        createdAt={createdAt}
                        />
                        
                      )
              }
            </div> :<div className='bg-[#F9FBFC] h-[89vh] flex items-center justify-center text-xl font-medium'> Trash is empty </div>
            
            }</div>
           </div>
          )
        }
        
