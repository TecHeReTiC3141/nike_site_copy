import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
      <section className="max-container flex  justify-center flex-wrap gap-8">
        {
          services.map((serv, ind) => {
            return <ServiceCard {...serv} key={ind}/>
          })
        }
      </section>
    )
}

export default Services