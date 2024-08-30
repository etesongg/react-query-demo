import React, {useEffect, useState} from 'react'
import {usePostQuery} from "./hooks/usePosts"

const NormalPage = () => {
    // const [isLoading, setIsLoading] = useState(false)
    // const [data, setData] = useState(null)
    // const fetchPost = async () => {
    //     setIsLoading(true)
    //     const url = "http://localhost:3004/posts"
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setIsLoading(false)
    //     setData(data)
    // }
    // useEffect(()=>{
    //     fetchPost();
    // }, [])
    
    // 따로 커스텀 훅을 만들면 좋은점
    // 내가 usePostQuery를 사용하고 싶은 곳에서 언제든 호출 가능
    const { data, isLoading, isError, error, refetch } = usePostQuery();
    if (isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      {data?.map((item, index)=>(
        <div key={index}>{item.title}</div>
      ))}
    </div>
  )
}

export default NormalPage
