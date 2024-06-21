import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { CloseContext } from '../../Layout/LandingPageLayout/header/Header';


const Hamburger = () => {
    const { close, setClose } = React.useContext(CloseContext)
    function handleClick() {
        const nav_el = document.querySelector("#nav-el")
        nav_el.classList.toggle("nav-active")
        nav_el.classList.toggle("hidden")
        setClose((prev) => !prev)
    }
    return (
        <div className="hamburger">
            <RxHamburgerMenu
                onClick={() => handleClick()}
                className={`scale-150 text-sky-500
                    dark:text-white hidden
                    ${close? "tail:hidden": "tail:block"}
                    transition-all duration-300 delay-75
                `}
            />
            <MdOutlineClose
                onClick={() => handleClick()}
                className={`scale-150 text-sky-500
                    dark:text-white hidden 
                    ${close? "tail:block": "tail:hidden"}
                    transition-all duration-300 delay-75
                `}
            />
        </div>
    )
}

export default Hamburger
