// import React from 'react'
import { FaCartShopping } from "react-icons/fa6"

const CartButton = () => {
  return (
    <button className="relative p-3">
        <FaCartShopping 
            className="text-xl text-gray-600
            dark:text-gray-400"
        />
        <div
            className="w-4 h4 bg-red-500 text-white
            rounded-full absolute top-0 right-0 flex
            items-center justify-center text-xs"
        >
            4
        </div>
    </button>
  )
}

export default CartButton