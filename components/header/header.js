import React from 'react'
import HeaderLinks from './header-links'
import MobileMenu from './mobile-menu'
import { auth, signIn, signOut } from '@/auth'
import SignIn from '../button/signin-button'
import SignOut from '../button/signout-button'
import { FiLogOut, FiUser } from 'react-icons/fi'

const Header = async () => {
    const session = await auth()
    const user = session?.user
  return (
    <header className='w-full border-b h-16 flex items-center  p-4'>
        <nav className='flex items-center justify-between max-w-screen-xl w-full mx-auto'>
            <div>
            <h1 className='text-xl font-bold text-primary'>Training Land</h1>
            </div>
            {user ? (
            <>
              <div className='hidden lg:flex items-center space-x-2'>
                <HeaderLinks />
                <LogoutButton />
              </div>
              <div className='flex items-center space-x-2 lg:hidden'>
                <MobileMenu />
                <LogoutButton />
              </div>
            </>
          ) : (
            <>
                   <div className='hidden lg:flex items-center space-x-2'>
                <HeaderLinks />
                <SignInButton />
              </div>
                 <div className='flex items-center space-x-2 lg:hidden'>
                <MobileMenu />
                <SignInButton />
            </div>
            </>
        )}
        </nav>  
    </header>
  )
}



function SignInButton(){
    return (
        <form
        action={async () => {
            'use server'
            await signIn()
        }}
        >
            <button
            variant='light'
            type='submit'>
                <FiUser className='h-4 w-4 mt-2' />
            </button>
        </form>
    )
  }
  
  function LogoutButton(){
    return(
        <form
        action={async () => {
            'use server'
            await signOut()
        }}
        >
            <button
            type='submit'
            variant='light'
            >
                <FiLogOut className='h-4 w-4 mt-2' />
            </button>
        </form>
    )
  }

export default Header