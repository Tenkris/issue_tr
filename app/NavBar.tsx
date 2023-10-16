'use client'
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const Current_path  = usePathname()
  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/Issue' , label: 'Issue' },
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
          <AiFillBug/>
        </Link>
        <ul className='flex space-x-6 '>
          {links.map(item => 
            <Link key={item.href} href={item.href} className= {classNames({'text-zinc-500 hover:text-zinc-800 transition-colors' :true,
            'text-zinc-800' : item.href === Current_path,
            'text-zinc-500' : item.href !== Current_path,
            })}>
              {item.label}
            </Link>
          )}
        </ul>
    </nav>
    // 'text-zinc-500 hover:text-zinc-800 transition-colors'
  )
}

export default NavBar