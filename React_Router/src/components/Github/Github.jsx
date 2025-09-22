import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shashank-bharti')
    //     .then(res=>res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])

    const bgImage = data.avatar_url

  return (
    <>
    <div className='p-5 text-white bg-gray-700 text-center'>
      Github Followers: {data.followers ?? undefined}
    </div>
      <div className='flex p-5 ' >
        <img src={bgImage} className='max-w-50 h-auto rounded-3xl overflow-clip' alt="Placeholder" />
      </div>
    </>
  )
}

export default Github

export const GithubInfoLoader = async()=> {
    const res = await fetch('https://api.github.com/users/shashank-bharti')
    return res.json()
}