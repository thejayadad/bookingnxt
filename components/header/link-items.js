'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

const LinkItem = ({name, href}) => {
    const pathname = usePathname()
    const isActive = (pathname === href)
  return (
    <Link 
    className={`text-purple-500 ${isActive ? 'font-bold' : 'text-gray-900'}`}
    href={href}>
        {name}
    </Link>
  )
}

export default LinkItem