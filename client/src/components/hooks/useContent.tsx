import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";


export function useContent(){
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, 
                    { withCredentials:true})
                    .then((response)=>{
                    setContents(response.data.content)
                    setLoading(false)
                })
    }

    useEffect( ()=>{
            refresh();
    },[])

    return {contents, loading, refresh}

}



