import React from 'react';
import InfoOutlineIcon from '@/public/svg/info-outline.svg';
import Image from 'next/image';
import Link from 'next/link';
import RedirectIcon from '@/public/svg/redirect-primary.svg';


type Props = {
  type: "warning" | "info" | "about"
}

const NotificationBox = ({ type="warning" }: Props) => {
  let content = null;
  let notificationStyles = "";
  
  if(type === "info") {
    content = "zkNebula is revolutionizing the decentralized fund-raising space with a community governed permissionless launchpad ensuring network of successful projects launched.";
    notificationStyles = "text-[.98rem] text-white/80"
  } else if(type === "about") {
    content = (
      <>
        <p>
          <span className='text-white font-semibold'>zkNebula</span>{" "} 
          is an extraordinary decentralized autonomous organization (DAO) project that has been developed to be entirely community-driven, providing the blockchain community with complete control over all decisions, contributions, and participation within the protocol. With its core components, namely the Nebula DAO, the NebulaPad, and Nebula NFTs, zkNebula revolutionizes the concept of decentralization in the blockchain space.</p>

        <footer className='space-y-1'>
          <h5 className='text-white text-[1.04rem] font-semibold'>Read Document</h5>
          <Link href="#about" className='flex items-center gap-x-2 text-tertiary-700 text-[.92rem]'>
            https://docs.zkNebula.com/…
            <Image
              src={RedirectIcon}
              alt="redirect icon"
              className='w-5 h-5 object-cover -mt-0.5'
            />
          </Link>
        </footer>
      </>
    )

    notificationStyles = "text-[.98rem] text-white/80 space-y-6"
  } else if(type === "warning") {
    content = (
      <>
        <Image 
          src={InfoOutlineIcon}
          alt="info-outline"
          className='w-5'
        />
        <p className='text-[.97rem] col-start-2 col-end-3'>You need to connect your wallet in order to submit a proposal.</p>
        <Link href="#learn-more" className='text-accent-shade-800 underline decoration-dotted text-[.92rem] col-start-2 col-end-3'>Learn more</Link>
      </>
    );
    notificationStyles = "grid grid-cols-[max-content,1fr] items-center gap-x-2";
  }
  
  return (
    <blockquote className={`p-[22px] w-full rounded-[12px] border border-tertiary-700 ${notificationStyles}`}>
      {content}
    </blockquote>
  )
}

export default NotificationBox