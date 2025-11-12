import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'> 
        <Link href ='/'>
        <Image src="/assets/icons/logo.svg" alt='signalist logo' width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
{/* Future navigation items can be added here */}
        </nav>
        {/* Future user actions can be added here */}
        </div>
        </header>
  )
}

export default header