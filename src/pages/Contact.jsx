import React from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
import Btn from '../components/Common/Btn'
import Faq from '../components/Faq/Faq'
import BottomMailSec from '../components/BottomMailSec/BottomMailSec'
import FooterFormMain from '../components/Form/Form'
import { Link } from 'react-router-dom'

const Contact = ({ onOpenModal }) => {
  return (
    <>
      <Seo title={"Contact Us"} description={"Welcome to Contact Us Page"} />
      <Hero
        mainclass={"hero-center about"}
        heroData={<>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
              <div className="heroDataLeft">
                <h1>Contact Us  </h1>
                <p>Have questions about MegaHCM? Our team is here to help. Reach out and we'll get back to you within 24 hours.</p>
                <div className="heroLeftBtn">
                  <Btn text={"Start for free"} name={"primary"} onClick={onOpenModal} />
                  <Btn text={"Watch Overview"} name={"noActive"} onClick={onOpenModal} />
                </div>
              </div>
            </div>

          </div>
        </>}
      />
      <section className='contact-boxes'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-box">
                <div className="contact-box-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email Us</h3>
                <p>Our team typically responds within 24 hours</p>
                <a href="mailto:someone@example.com">xyz@gmail.com</a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-box">
                <div className="contact-box-icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Call Us</h3>
                <p>MON - FRI From
                  9:00AM to 6:00PM</p>
                <a href="mailto:someone@example.com">xyz@gmail.com</a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-box">
                <div className="contact-box-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Visit Us</h3>
                <p>Come say hello at our office</p>
                <a href="mailto:someone@example.com">123 Business Ave, Suite 100, San Francisco, CA 94105</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-sec1">
        <div className="container">
          <div className="row ">
            <div className="col-l2 col-md-12 col-lg-6">
              <div className="contactForm">
                <div className="heading left">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and our team will get back to you shortly.</p>
                </div>
                <FooterFormMain />
              </div>
            </div>
            <div className="col-l2 col-md-12 col-lg-6">
              <div className="conact-sec1-right-wrapper">
                <div className="conact-sec1-right">
                  <div className="contact-sec1-right-box">
                    <h3><i className="ri-timer-2-line"></i> Office Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday - Sunday: <span>Closed</span></p>
                  </div>
                  <div className="contact-sec1-right-box">
                    <h3><i className="ri-customer-service-line"></i> Priority Support </h3>
                    <p>Enterprise customers get 24/7 dedicated support with a 2-hour response SLA.</p>
                  </div>
                  <div className="contact-sec1-right-box">
                    <h3><i className="ri-customer-service-line"></i> Become a Partner</h3>
                    <p>Join our partner ecosystem and grow your business with MegaHCM.</p>
                  </div>
                </div>
                <div className="conact-sec1-bottom">
                  <h3>Follow Us</h3>
                  <div className="contact-social-icons">
                    <Link to={"#"}><i className="ri-instagram-line"></i></Link>
                    <Link to={"#"}><i className="ri-twitter-x-line"></i></Link>
                    <Link to={"#"}><i className="ri-facebook-box-fill"></i></Link>
                    <Link to={"#"}><i className="ri-linkedin-fill"></i></Link>
                    <Link to={"#"}><i className="ri-youtube-fill"></i></Link>
                    <Link to={"#"}><i className="ri-tiktok-line"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.623572373232!2d67.06427897520062!3d24.8767029779187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f2a6b34be7d%3A0x83b679a671f1e7a6!2sSourceCode%20-%20Digital%20Web%20Solutions%20%26%20Digital%20Business%20Solutions!5e0!3m2!1sen!2s!4v1782838546246!5m2!1sen!2s"
            width="100%"  // Responsive karne ke liye width 100% best hai
            height="450"
            style={{ border: 0 }} // React standard dynamic style double curly braces {{}} mein aata hai
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Office Location Map" // Accessibility / Console Warning Fix
          ></iframe>
        </div>
      </section>

      {/* FAQ */}
      <Faq />
      <BottomMailSec name={"contactBottomMail"} />
    </>
  )
}

export default Contact
