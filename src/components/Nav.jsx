import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants' 

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={30} />
            </a>
            <div className="lg:hidden">
              <img src={hamburger} alt="hamburger"  width={25}/>
            </div>
            <ul className="flex-1 justify-center gap-16 hidden lg:flex">
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="font-montserrat leading-normal texl-xl text-slate-gray">{ link.label }</a>
                  </li>
                ))
              }
            </ul>
        </nav>
    </header>
  )
}

export default Nav