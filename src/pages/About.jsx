import React from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import AboutSec1Img1 from '../assets/images/about-sec1img1.webp'
import AboutSec1Img2 from '../assets/images/about-sec1img2.webp'
import Drives from '../components/Drives/Drives'
import Role from '../components/Role/Role'
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider'
import Faq from '../components/Faq/Faq'
import BottomMailSec from '../components/BottomMailSec/BottomMailSec'
import Timeline from '../components/Timeline/Timeline'




const About = ({ onOpenModal }) => {
  return (
    <>
      <Seo title="About" description="Welcome to About Page" />
      <Hero
        mainclass={"about"}
        heroData={<>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
              <div className="heroDataLeft">
                <h1>Know More About Us  </h1>
                <p>Lobortis gravida eu suspendisse odio viverra lectus tristique. Ut vitae aliquet enim in. Vulputate ac donec ultrices dui aenean arcu elementum.</p>
                <div className="heroLeftBtn">
                  <Btn text={"Start for free"} name={"primary"} onClick={onOpenModal} />
                  <Btn text={"Watch Overview"} name={"noActive"} onClick={onOpenModal} />
                </div>
              </div>
            </div>

          </div>
        </>} />

      <section className="about-sec1">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-sec1-data">
                <p>Ded arcu magna faucibus sed est. Cum ut libero hac adipiscing morbi eget est ullamcorper. Eget in natoque quis eget dolor viverra. Lobortis gravida eu suspendisse odio viverra lectus tristique. Ut vitae aliquet enim in. Vulputate ac donec ultrices dui aenean arcu elementum euismod adipiscing. Eget arcu suspendisse vel pellentesque volutpat felis non aliquam.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-sec1-img right">
                <img className='img-fluid' src={AboutSec1Img1} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-sec1-img">
                <img className='img-fluid' src={AboutSec1Img2} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-sec1-data">
                <p>June 10th, 2021 marked the start of a new era for MegaHcm  we rang the opening bell and officially became a publicly traded company on Nasdaq.</p>
                <p>These days, we continue to fuel our growth by evolving into a multi-product company, providing people, teams, and companies powerful products to help turn their work visions into a reality. <span>We’re only just getting started.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Drives />

      <Timeline />
      <Role />
      <ReviewsSlider />
      <BottomMailSec />
      <Faq />
    </>
  )
}

export default About
