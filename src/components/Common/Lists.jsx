import React from 'react'

const Lists = ({heading, para}) => {
    return (
        <div className="lists">
            <div className="listIcon">
                <i className="ri-checkbox-fill"></i>
            </div>
            <div className="listData">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default Lists
