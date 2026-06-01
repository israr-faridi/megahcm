import React from 'react'
import ai from '../../assets/images/ai.webp'
import EmailFrom from '../EmailFrom/EmailFrom'

const Hero = ({ slider }) => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="heroData">
                        <h1>The business software to manage your whole team</h1>
                        <p>Time, talent, finance, and payroll processes unified and automated. <span><img className='img-fluid' src={ai} /></span>  handles the paperwork, you handle the people.</p>
                        <EmailFrom />
                    </div>
                </div>
                {slider}
                
            </section>

        </>
    )
}

export default Hero
