import React from 'react'
import EmailFrom from '../EmailFrom/EmailFrom'

const BottomMailSec = ({name}) => {
    return (
        <section className={`bottomMailSec ${name}`}>
            <div className="heading">
                <h2>Emper lectus dign
                    issim risus nulla posuere.</h2>
                <p>Request a free demo of Factorial to show you how to transform all your processes.</p>
                <EmailFrom />
            </div>
        </section>
    )
}

export default BottomMailSec
