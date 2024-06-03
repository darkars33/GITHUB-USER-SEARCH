import React from 'react'

const Following = ({following}) => {
  return (
    <div className='flex flex-col gap-3'>
      {following && following.map((follow) => {
        return(
          <>
          <div className='flex items-center gap-3 p-4 bg-blue-400 rounded-2xl'>
            <img src={follow.avatar_url} alt={follow.login} className='w-24 h-24 rounded-full' />
            <h1 className='text-white text-[20px]'>{follow.login}</h1>
          </div>
          </>
        )

      })}
    </div>
  )
}

export default Following;

// follow.avatar_urlfollow.login
