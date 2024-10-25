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
const HeaderLinks = () => {
  return (
    <div className='flex items-center space-x-2'>
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

export default HeaderLinks