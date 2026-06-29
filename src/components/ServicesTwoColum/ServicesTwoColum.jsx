import React from 'react'

const ServicesTwoColum = ({ name = "", heading, para, List, Btns, img }) => {
    return (
        <section className={`servicesTwoColum ${name}`.trim()}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="serviceTwoColLeft">
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="serviceTwoColRight">
                            <div className="heading left">
                                <h2>{heading}</h2>
                                <p>{para}</p>
                            </div>
                            {List}
                            {Btns}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesTwoColum
