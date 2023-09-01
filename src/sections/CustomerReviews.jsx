import React from 'react';
import { reviews } from '../constants';
import CustomerReview from '../components/CustomerReview';

const CustomerReviews = () => {
  return (

    <section className="max-container">
        <h1 className="capitalize font-palanquin text-4xl mb-5 font-bold text-center">What our <span className="text-coral-red">customers</span> say?</h1>
        <div className="flex flex-1 justify-center">
          <p className="font-montserrat text-slate-gray md:max-w-lg text-lg leading-7 text-center ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>
     

        <div className="flex flex-1 max-lg:flex-col my-16 justify-evenly items-center gap-14">
          { reviews.map((rev, index) => {
            return (
              <CustomerReview {...rev} key={index} />
            )
          })}
        </div>
    </section>
  )
}

export default CustomerReviews;