'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Links } from '@/typings';

const DashboardSidebarLink = ({ name, route }: Links) => {
    const pathname = usePathname();
    const activeLink = pathname === route ? "text-tertiary-900 font-semibold" : "text-white hover:text-tertiary-900";
    console.log(activeLink)

    return (
        <li key={name}>
            <Link 
                href={route} 
                className={`capitalize text-[.92rem] transition-colors duration-300 ${activeLink}`}
            >
                {name}
            </Link>
        </li>
    )
}

export default DashboardSidebarLink