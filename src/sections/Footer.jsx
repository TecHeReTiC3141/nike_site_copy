import React from 'react'
import { footerLogo } from '../assets/images';
import { socialMedia, footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div>
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={45} />
          </a>
          <p className="font-montserrat text-white-400 max-w-sm mt-6 leading-7 ">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-6 items-center mt-8">
            {
              socialMedia.map((media, index) => (
                  <div key={index} className="bg-white rounded-full p-3 cursor-pointer">
                    <img {...media} />
                  </div>
                )
              )
            }
          </div>
        </div>

        <div className="flex flex-1 justify-between items-start lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((link, index) => {
              return (
                <div className="text-white" key={index}>
                  <h3 className="font-montserrat texl-2xl font-medium">{link.title}</h3>
                  <ul className="flex flex-col gap-2 mt-4">
                    {
                      link.links.map((li, index) => (
                        <li key={link.name}>
                           <a href={li.link} className="text-gray-300 text-base font-montserrat hover:text-slate-gray cursor-pointer">{li.name}</a>
                           
                        </li>
                     
                      )
                      )}
                  </ul>
                </div>
              )
            })
          }
        </div>

        <div className="flex w-full justify-between mt-24 max-sm:flex-col items-center">
          <div className="flex gap-2  cursor-pointer">
          <img width={20} height={20} src={copyrightSign} alt="copyright sign"/>
          <h5 className="font-montserrat text-gray-400">Copyright. All rights reserved.</h5>
          </div>
          <p className="font-montserrat cursor-pointer text-gray-400">
Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;