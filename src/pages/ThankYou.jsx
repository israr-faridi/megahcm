import React from 'react'
import Seo from '../components/Common/Seo'
import Btn from '@/components/Common/Btn'

const ThankYou = () => {
    return (
        <>
            <Seo title="Thank You" description="Thank You For coming" />

            {/* Thank You */}
            <section className="thankYou">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-8">
                            <h1>Thank You for Submitting Your Details</h1>
                            <p>One of our journal publication experts will contact you within 24–48 hours.</p>
                            <Btn link={"/"} name={"primary"} text={"Go Back To Home"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYou
