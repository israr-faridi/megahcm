import Seo from '@/components/Common/Seo'
import Hero from '@/components/Hero/Hero'
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import BrandIcon1 from '@/assets/images/brandIcon1.webp'
import BrandIcon2 from '@/assets/images/brandIcon2.webp'
import BrandIcon3 from '@/assets/images/brandIcon3.webp'
import BrandSlider from '../components/BrandSlider/BrandSlider'
import Btn from '../components/Common/Btn'
import Sec1 from '@/assets/images/sec1.webp'
import MegaCoreSection from '../components/MegaCoreSection/MegaCoreSection'
import TabGallerySection from '../components/TabGallerySection/TabGallerySection'
import FeatureHub from '../components/FeatureHub/FeatureHub'

const Home = () => {
    const BrandIcons = [
        {
            img: BrandIcon1,
            firstHeading: "4000+",
            secondHeading: "Customers"
        },
        {
            img: BrandIcon2,
            firstHeading: "2.7 million",
            secondHeading: "Employees"
        },
        {
            img: BrandIcon3,
            firstHeading: "20+",
            secondHeading: "Countries"
        },

    ]
    return (
        <>
            <Seo title="Home" description="Welcome to homepage" />
            <Hero slider={<HeroSlider />} />
            {/* Brand */}
            <section className="brand">
                <div className="container">
                    <div className="heading">
                        <h2>Preferred by Top Companies as their MegaHcm Partner</h2>
                        <p>Employee experience that scales as your organization scales</p>
                    </div>

                    {/* Top Brand Name */}
                    <div className="brand_top">
                        <div className="row">
                            {BrandIcons.map((data, idx) => {
                                return <div key={idx} className="col-12 col-md-4 col-lg-3">
                                    <div className="brand_top_data">
                                        <div className="brand_top_left">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <div className="brand_top_right">
                                            <span>{data.firstHeading}</span>
                                            <p>{data.secondHeading}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>


                </div>
                <BrandSlider />
                {/* Brand Button */}
                <div className="brand_btn">
                    <Btn text={"View More Client Testimonials"} name={"primary"} />
                </div>
            </section>

            {/* Sec1 */}
            <section className="sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="sec1_data">
                                <div className="heading left">
                                    <h2>Cursus turpis  accumsan, A semper lectus vitae</h2>
                                    <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="sec1_count">
                                {/* <img className='img-fluid' src={Sec1} alt="" /> */}
                                <div className="sec1_count_box sec1_count_box_bottom sec1_count_box_bottom_left">
                                    <h3>3X</h3>
                                    <p>Faster Workflow</p>
                                </div>
                                <div className="sec1_count_box sec1_count_box_center">
                                    <h3>12k+</h3>
                                    <p>Business Empowered</p>
                                </div>
                                <div className="sec1_count_box sec1_count_box_bottom sec1_count_box_bottom_right">
                                    <h3>98%</h3>
                                    <p>User Satisfaction Rate</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MegaCoreSection />


            <section className="galleySection">
                <div className="container">
                    <div className="heading">
                        <h2>Cursus turpis vitae accu msan Asemperturpis</h2>
                        <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan. A semper lectus dignissim risus nulla posuere. </p>
                    </div>

                    <TabGallerySection />
                </div>
            </section>

            <FeatureHub />

        </>
    )
}

export default Home
