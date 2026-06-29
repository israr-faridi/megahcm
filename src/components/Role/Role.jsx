import React from 'react'
import Sec3Img from '@/assets/images/sec3right.webp'

const Role = () => {
    const sec3Data = ['School Administrators', 'Teachers & Staff', 'Parents & Guardians', 'Students', 'Finance Departments', 'IT Teams']
    return (
        <section className="sec3">
            <div className="container">
                <div className="heading center">
                    <h2>Built for Every Role</h2>
                    <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. </p>
                    <div className="sec3Cards">

                        {sec3Data.map((data, idx) => {
                            return <div key={idx} className="sec3Card">
                                <i className="ri-check-line"></i>
                                <p>{data}</p>
                            </div>
                        })}

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="sec3Left">
                            <h3>Works With Your Favourite Tools</h3>
                            <p>Connect Leado with your favorite platforms</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="sec3Right">
                            <img className='img-fluid' src={Sec3Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Role
