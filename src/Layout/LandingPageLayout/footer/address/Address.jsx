import React from 'react'
import { InternalNavlink } from "../../../components/Link/Link";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="py-8 px-4 col-span-2 sm:col-auto">
        <h1 className="text-xl font-bold sm:text-left mb-3">
            Address
        </h1>
        <div>
            <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <a href="tel:+2349060173264">Call our customer service</a>
            </div>
            <div 
                className="flex items-center   gap-3 mt-6">
                <InternalNavlink to={"#"} target="_blank">
                    <FaInstagram className="text-3-xl hover:text-primary
                    duration-300"/>
                </InternalNavlink>
                <InternalNavlink to={"#"} target="_blank">
                    <FaFacebook className="text-3-xl hover:text-primary
                    duration-300"/>
                </InternalNavlink>
                <InternalNavlink to={"#"} target="_blank">
                    <FaTwitter className="text-3-xl hover:text-primary
                    duration-300"/>
                </InternalNavlink>
            </div>
        </div>
    </div>
  )
}

export default Address