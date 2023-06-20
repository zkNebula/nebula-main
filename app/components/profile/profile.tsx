import Image from 'next/image'
import React from 'react';
import { User } from '@/typings';

const Profile = ({ name, address, image }: User) => {
  return (
    <div className='flex items-center gap-x-2 relative'>
        <Image 
            src={image}
            alt={name + "-profile"}
        />
        <p className='text-[.94rem] text-white/90'>{name ?? address}</p>
    </div>
  )
}

export default Profile