// import React from 'react'
import PropTypes from "prop-types"
import { ButtonLink } from '../Link/Link'

const Button = ({text, bgColor, textColor, handler = () => {} }) => {
  return (
    <ButtonLink
        className={`${bgColor} ${textColor}
            cursor-pointer hover:scale-105
            duration-300 py-2 px-8 rounded-full
            relative z-10
        `}
    >
        {text}
    </ButtonLink>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    handler: PropTypes.func
}

export default Button