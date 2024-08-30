import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePostQuery } from "./hooks/usePosts"

const ReactQueryPage = () => {
// ui적인것과 로직적인 것이 한데 모여있어서 로직부분을 usePosts로 분리
  const { data, isLoading, isError, error, refetch } = usePostQuery();
  // const fetchPost = (queryData) => {
  //   const id = queryData.queryKey[1] 
  //   return axios.get(`http://localhost:3004/posts/${id}`)
  // }
  // const { data, isError, isLoading, error, refetch } = useQuery({
  //   queryKey: ["posts", 1], // 디테일한 데이터를 가져오고 싶다면 추가로 매개변수를 넘겨줄수 있다.
  //   queryFn: fetchPost,
  //   retry: 1, // 재시도 횟수 정할 수 있음
  //   select:(data)=>{ // 데이터 중에 받고 싶은거 지정 가능
  //     return data.data
  //   },
    // enabled: false, // 초기에 fetch 실행되지 않게 함, 다양한 조건 넣을 수 있음 키워드가 있으면 enabled해라
    // refetchInterval: 3000, // 반복해서 fetch 함
    // refetchOnMount: false, // api 호출 한번만 하고 안 부를 거임, true는 매번 호출
    // refetchOnWindowFocus: true, // 해당 창을 다시 보면 fetch 함
    // staleTime: 10000, // 데이터가 fresh에서 stale로 변하는 시간 10초, 리액트 쿼리의 기본 staletime은 0임 그래서 캐시에 데이터가 들어갔더라도 뒤에서는 매먼 호출이 일어나는 것, 내가 가져오는 데이터가 해당 시간동안은 바뀌지 않을거라는 확신이 있을때 사용
    // gcTime:5000 // garbage collect time 5초가 지나면 캐시가 지워짐, 기본값은 5분, stale < gctime
  // })
  // console.log(data, isLoading) // undefined true -> {data~~} false

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      {data?.map((item)=>( // select를 통해 data.data를 data로 바꿀 수 있었음
        <div>{item.title}</div>
      ))}
      <button onClick={refetch}>post 리스트 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage

// 쿼리 여러개 부르는 방법: useQueries
// const results = useQueries({
//   queries: isDisabled.map((id) => {
//     return {
//       queryKey: ["posts",id],
//       queryFn: () => fetchPostDetail(id),
//     }
//   }),
//   combine: (results) => { // select와 비슷, 데이터 중에 받고 싶은거 지정 가능
//     return {
//       data: results.map((result)=> result.data),
//     }
//   }
// })
// console.log("results", results)
// return <div></div>
