import React from 'react';
import InfoOutlineIcon from '@/public/svg/info-outline.svg';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
  type: "warning" | "info"
}

const NotificationBox = ({ type="warning" }: Props) => {
  let content = null;
  let notificationStyles = "";
  
  if(type === "info") {
    content = "zkNebula is revolutionizing the decentralized fund-raising space with a community governed permissionless launchpad ensuring network of successful projects launched.";
    notificationStyles = "text-[.98rem] text-white/80"
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
    <blockquote className={`p-[22px] w-full rounded-[12px] border border-tertiary-900 ${notificationStyles}`}>
      {content}
    </blockquote>
  )
}

export default NotificationBox