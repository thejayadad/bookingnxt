'use client'
import React from 'react'
import LinkItem from './link-items'

const routes = [
    {
        name: 'Home',
        href: "/"
    },
    {
        name: "Booking",
        href: "/bookings"
    },
    {
        name: "training",
        href: '/training'
    }
]

const MobileLinks = () => {
  return (
    <div className='flex flex-col space-y-4'>
        {routes.map(route => (
            <LinkItem
            key={route.href}
                name={route.name}
                href={route.href}
            />
        ))}
    </div>
  )
}

export default MobileLinks