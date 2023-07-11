import Image from 'next/image';
import CopyContent from '../copy-content/copy-content';
import FaviconBordered from '@/public/images/favicon-bordered.png';
import Avatar from "@/public/images/avatar.png";
import { truncateWalletAddress } from '@/app/lib/utils';
import { FC } from 'react';

interface UserProfileProps {
    size?: "sm" | "md" | "lg"
}
 
const UserProfile: FC<UserProfileProps> = ({ size="sm" }) => {
    const address = "0x5E93Dc46cb41D9ACbEc0da2b5F33de7a4a8Cf7a9";
    const isUserAuthenticated = true;
    let profile = null;
    let profileImageSize;

    if(size === "lg")
        profileImageSize = "w-24 h-24";
    else if(size === "md")
        profileImageSize = "w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20"
    else
        profileImageSize = "w-16 h-16";


    if(isUserAuthenticated)
    profile = (
      <>
        <figure className={`rounded-full ${profileImageSize} shadow`}>
          <Image
            src={Avatar}
            alt="avatar"
            className='w-full h-full object-cover'
            priority
          />
        </figure>

        {/* Header info */}
        <div className='text-center w-full grid gap-y-1'>
          <h6 className='text-white leading-5 text-base sm:text-lg font-medium mb-1'>Cypherslopps</h6>
          <CopyContent copyText={truncateWalletAddress(address)} />
        </div>
      </>
    );
  else 
    profile = (
      <>
        <figure className={`rounded-full ${profileImageSize} shadow`}>
          <Image 
            src={FaviconBordered}
            alt="nebula favicon"
            priority
          />
        </figure>

        {/* Header info */}
        <div className='text-center w-full'>
          <h6 className='text-white leading-5 text-lg font-medium'>Nebula</h6>
          <span className='text-white/70 text-[.82rem]'>304 members</span>
        </div>
      </>
    )
    return (
        <>
          {profile}
        </>
    );
}
 
export default UserProfile;