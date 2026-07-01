import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

// Use 'onClick' here because that is what you passed from EmailFrom
const Btn = ({ link = "/", text, name, onClick  }) => {
    const Component = link.includes("#") ? HashLink : Link;
    return (
        <Component
            to={link}
            smooth={link.includes("#")}
            className={`btn ${name}`}
            onClick={onClick}
            role="button"
        >
            {text}
        </Component>
    )
}

export default Btn