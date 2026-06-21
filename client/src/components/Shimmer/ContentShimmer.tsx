import { CardShimmer } from "./CardShimmer"


export const ContentShimmer = () => {

  return (
  
    <div className='bg-[#F9FBFC] h-screen'>

   <div className='p-4 md:ml-72 md:pl-10 bg-[#F9FBFC] h-1vh'>

    
   <div className='flex justify-between md:justify-end gap-2 mt-4 mr-8'>
       <div className=" px-10 md:px-24 py-6 bg-gray-200 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
       <div className=" md:hidden px-16 md:px-24 py-6 bg-gray-200 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
       <div className=" px-10 md:px-24 py-6 bg-gray-200 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
       <div className='hidden md:block px-6 py-4 bg-gray-200 hover:shadow-black/50 transition-all duration-300 animate-pulse cursor-pointer  rounded-full'>
     </div>
  </div>

  <div className="h-[88vh] mt-2">

      <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 mt-8 md:mt-2 md:p-4 md:pr-12' >
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        <CardShimmer/>
        
      </div>
      
  </div>
        
    
   </div>
   </div>
  )
}
