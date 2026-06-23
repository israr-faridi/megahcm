import React from 'react'
import Btn from './Btn'

const TwoBtn = ({ FirstText, FirstName, SecondText, SecondName, FirstOnClick, SecondOnClick }) => {
    return (
        <div className="twoBtns">
            <Btn text={FirstText} name={FirstName} onClick={FirstOnClick} />
            <Btn text={SecondText} name={SecondName} onClick={SecondOnClick} />
        </div>
    )
}

export default TwoBtn
