import React from 'react'

const UpArrow = () => {

    function handleClick() {
        window.scroll(0, 0);
    }
  return (
    <div className="fixed right-8 bottom-8 opacity-100 bg-white rounded-full flex justify-center items-center
    w-20 h-20 z-50 cursor-pointer transition ease-linear duration-500 border border-gray-200 shadow-md" id="up-arrow" onClick={handleClick}>
        <i className="fa-solid fa-arrow-up-long text-4xl"></i>
    </div>
  )
}

export default UpArrow