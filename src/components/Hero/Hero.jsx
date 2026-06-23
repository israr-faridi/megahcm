import React from 'react'
import ai from '../../assets/images/ai.webp'

const Hero = ({ slider, mainclass, heroData }) => {
    return (
        <>
            <section className={`hero ${mainclass} `}>
                <div className="container">
                    <div className="heroData">
                       
                        {heroData}
                    </div>
                </div>
                {slider}

            </section>

        </>
    )
}

export default Hero
