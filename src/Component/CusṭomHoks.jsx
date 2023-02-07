import React from 'react'

import { useState,useEffect } from 'react'

const CusṭomHoks = (url) => {

    const[data,setData]=useState([])

    useEffect(()=>{
        async function manipulateData(){
            const call=await fetch(url)
            const res=await call.json()
            console.log(res)
            setData(res)
            

        }
        manipulateData()
    },[])
  return [data]
   
}

export default CusṭomHoks