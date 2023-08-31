import React from 'react'

const ShoeCard = ({ imgURL, changeCurrentShoe, active }) => {
  return (
    <div onClick={changeCurrentShoe} className={`rounded-xl ${active && 'border-2 border-coral-red'} cursor-pointer max-sm:flex-1 z-25` } >
        <div className="bg-card flex justify-center align-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
            
            <img src={imgURL} alt="show" width={127} height={103} className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard