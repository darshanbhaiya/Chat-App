import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Avatar = ({userId,name,imageUrl,width,height}) => {

  const onlineUser=useSelector(state => state?.user?.onlineUser)

  let avatarName=""



  if(name){
    const splitName=name?.split(" ")

    if(splitName.length>1){
        avatarName=splitName[0][0]+splitName[1][0]
    }else{
        avatarName=splitName[0][0]
    }
  }

  const bgColor=[
    'bg-slate-200',
    'bg-teal-200',
    'bg-red-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-gray-200',
    'bg-indigo-200',
    'bg-fuchsia-200',
    'bg-rose-200',
    'bg-cyan-200',
    'bg-zinc-200'

  ]

  
   const randomNumber=Math.floor(Math.random() * 11)

   const isOnline=onlineUser.includes(userId)
   
  return (
    <div className={`text-slate-800 rounded-full font-bold relative`} style={{width:width+"px",height:height+"px"}}>
      {
        imageUrl ? (
            <img 
                src={imageUrl} 
                alt={name}
                width={width} 
                height={height} 
                className='overflow-hidden rounded-full'
            />
        ) : (
            name ? (
                <div style={{width:width+"px",height:height+"px"}} className={`overflow-hidden rounded-full flex justify-center items-center text-lg  ${bgColor[randomNumber]}`}>
                    {avatarName}
                </div>

            ) : (
                <FaRegCircleUser 
                    size={width}
                />
            )
        )

      }

      {
        isOnline && (
          <div className='bg-green-600 p-1 absolute bottom-2 -right-1 z-10 rounded-full'> </div>
        )
      }



    </div>
  )
}

export default Avatar
