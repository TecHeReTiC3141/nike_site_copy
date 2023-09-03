import React from 'react'

import './index.css'

import {
  Hero, 
  Products,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  CustomerReviews,
  Footer,
} from './sections/index';
import UpArrow from './components/UpArrow';
import Nav from './components/Nav';

export default function App() {

  function handleScroll(ev) {
    console.log('scroll', window.scrollY);
    const upArrow = document.querySelector("#up-arrow");
    if (Math.round(window.scrollY) > window.innerHeight) {
        upArrow.classList.add("opacity-100")
        upArrow.classList.remove("opacity-0")
    } else {
        upArrow.classList.remove("opacity-100")
        upArrow.classList.add("opacity-0");
    }
  }

  React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    
    <main className="relative" onScroll={handleScroll}>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />

      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8 text-gray-100">
        <Footer />
      </section>
      <UpArrow />
    </main>
     

  )
}