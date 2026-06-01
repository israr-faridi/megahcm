import React from 'react'
import { Link } from 'react-router-dom'

// Use 'onClick' here because that is what you passed from EmailFrom
const Btn = ({ text, name, onClick }) => {
    return (
        <Link 
            to="#" // Link uses 'to', not 'href'
            className={`btn ${name}`}
            onClick={onClick}
            role="button"
        >
            {text}
        </Link>
    )
}

export default Btn