import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";


export function useContent(){
    const [contents, setContents] = useState([]);

    function refresh(){
        console.log("prithwi get request.........")
        axios.get(`${BACKEND_URL}/api/v1/content`, 
                    { withCredentials:true})
                    .then((response)=>{
                    setContents(response.data.content)
                })
    }

    useEffect( ()=>{
            refresh();
            console.log("run get request .....")
    },[])

    return {contents, refresh}

}



