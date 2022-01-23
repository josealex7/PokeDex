import React, {useEffect, useState} from 'react';
import axios from "axios"


export const useData = (url) => {

    const [data, setData] = useState({cargando:true, data:null});

    const getData = async(url) => {
        try{
        setData({cargando:true, data:null})
        const resp = await fetch(url)
        const data = await resp.json()
        setData({cargando:false, data})
        }catch(e){
            console.log(e)
        }
        // .then(response => {  
        //     setData(response.data);
        // }).catch(error => {
        //     console.log(error);
        // })
}
    useEffect(() => {
      getData(url)
    }, [url]);
    
    return data
};
