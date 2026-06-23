import React from 'react'
import Btn from './Btn'

const TwoBtn = ({ FirstText, FirstName, SecondText, SecondName }) => {
    return (
        <div className="twoBtns">
            <Btn text={"Start for free"} name={"primary"} onClick={onOpenModal} />
            <Btn text={"Watch Overview"} name={"noActive"} onClick={onOpenModal} />
        </div>
    )
}

export default TwoBtn
