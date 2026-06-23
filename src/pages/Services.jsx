import React from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
// import ServicesHero from '../assets/images/servicesHero.webp'
import ServiceHero from '../assets/images/servicesHero.webp'
import Btn from '../components/Common/Btn'
const Services = ({onOpenModal}) => {
    return (
        <>
            <Seo title="Services" description="Welcome to Servicespage" />
            <Hero mainclass={"services"}
                heroData={<>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="heroDataLeft">
                                <h1>Accurate Attendance Management <span>Empowering Workforce</span></h1>
                                <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet.</p>
                                <div className="heroLeftBtn">
                                    <Btn text={"Start for free"} name={"primary"} onClick={onOpenModal}/>
                                    <Btn text={"Watch Overview"} name={"noActive"} onClick={onOpenModal}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="heroDataRight">
                                <img className='img-fluid' src={ServiceHero} alt="" />
                            </div>
                        </div>
                    </div>
                </>} />

        </>
    )
}

export default Services
