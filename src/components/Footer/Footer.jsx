import React from 'react'
import footerLogo from "@/assets/images/logo.webp"
import appleStore from '@/assets/images/apple-store.webp'
import googleStore from '@/assets/images/google-store.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="footer-top-left">
                <div className="footer-logo-img">
                  <img className='img-fluid' src={footerLogo} alt="" />
                </div>
                <div className="footer-top-left-data">
                  <p><span>A semper lectus dignissim risus </span>ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quos ipsa ut debitis! Deserunt expedita, illo accusantium voluptas quas maxime, est alias voluptate impedit corrupti quis iure veritatis praesentium nesciunt?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-center-data">
                <h4>Product</h4>

                <ul>
                  <li><Link to={""}>Features</Link></li>
                  <li><Link to={""}>Integrations</Link></li>
                  <li><Link to={""}>Factorial API</Link></li>
                  <li><Link to={""}>Solutions</Link></li>
                  <li><Link to={""}>Pricing</Link></li>
                  <li><Link to={'/sign-in'}>Log In</Link></li>
                  <li><Link to={""}>Try Factorial for free</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-center-data">
                <h4>Company</h4>

                <ul>
                  <li><Link to={""}>What is Factorial?</Link></li>
                  <li><Link to={""}>Our team</Link></li>
                  <li><Link to={""}>Customers</Link></li>
                  <li><Link to={""}>Work with us</Link></li>
                  <li><Link to={""}>Partners</Link></li>
                  <li><Link to={""}>Factorial Labs</Link></li>
                  <li><Link to={""}>Integrations partner program</Link></li>
                  <li><Link to={""}>Sitemap</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-center-data">
                <h4>Support</h4>

                <ul>
                  <li><Link to={""}>Contact</Link></li>
                  <li><Link to={""}>Help Center</Link></li>
                  <li><Link to={""}>Pravicy</Link></li>
                  <li><Link to={""}>Security</Link></li>
                  <li><Link to={""}>Legal</Link></li>
                  <li><Link to={""}>Terms & Conditions</Link></li>
                  <li><Link to={""}>Cookies</Link></li>
                  <li><Link to={""}>Preferences</Link></li>
                  <li><Link to={""}>Complaints channel</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-center-data">
                <h4>Resources</h4>

                <ul>
                  <li><Link to={""}>Blog</Link></li>
                  <li><Link to={""}>Templates</Link></li>
                  <li><Link to={""}>Podcasts</Link></li>
                  <li><Link to={""}>Webinars</Link></li>
                  <li><Link to={""}>eBook</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-bottom-images">
                <div className="footer-bottom-image">
                  <img className='img-fluid' src={appleStore} alt="" />
                </div>
                <div className="footer-bottom-image">
                  <img className='img-fluid' src={googleStore} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="footer-icons">
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
    </footer>
  )
}

export default Footer
