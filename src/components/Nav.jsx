import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants' 

const Nav = () => {
  
  const handleHamClick = ev => {
    ev.stopPropagation();
    const smNav = document.querySelector(".sm-nav");
    smNav.classList.toggle("active"); 
  }, handleDocClick = () => {
    const smNav = document.querySelector(".sm-nav");
    smNav.classList.remove("active"); 
  }, handleDocScroll = () => {
    const header = document.querySelector("header")
    if (Math.round(window.scrollY) > header.offsetHeight) {
      header.classList.remove("on-top");
    } else {
      header.classList.add("on-top");

    }
  }

  React.useEffect(() => {
      const ham = document.querySelector(".hamburger"),
      smNav = document.querySelector(".sm-nav")
      ham.addEventListener("click", handleHamClick)
      document.addEventListener("click", handleDocClick)
      addEventListener("scroll", handleDocScroll)

      return () => {
        ham.removeEventListener("click", handleHamClick)
        document.removeEventListener("click", handleDocClick)
        removeEventListener("scroll", handleDocScroll)

      }

  }, [])

  return (
    <header className="padding-x py-8 on-top z-50 w-full transition-all ease-linear duration-300">
        <nav className="flex justify-between max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={30} />
            </a>
            <div className="lg:hidden relative">
              <img src={hamburger} alt="hamburger" className="hamburger cursor-pointer"  width={25}/>
              <ul className="sm-nav absolute top-full -translate-x-[50%] overflow-y-hidden rounded-xl  transition-all duration-500 ease-linear bg-white">
              {
                navLinks.map((link, index) => (
                  <li className="py-2 border-b border-slate-gray last:border-0" key={index}>
                    <a href={link.href} className="font-montserrat leading-normal texl-xl text-slate-gray whitespace-nowrap ">{ link.label }</a>
                  </li>
                ))
              }
              </ul>
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