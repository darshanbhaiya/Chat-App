import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const Avatar = ({userId,name,imageUrl,width,height}) => {

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
    'g-rose-200',
    'bg-cyan-200',
    'bg-teal-200'

  ]

  
   const randomNumber=Math.floor(Math.random() * 11)
   
  return (
    <div className={`text-slate-800 overflow-hidden rounded-full font-bold `} style={{width:width+"px",height:height+"px"}}>
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
    </div>
  )
}

export default Avatar
