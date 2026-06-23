import Seo from '@/components/Common/Seo'
import Hero from '@/components/Hero/Hero'
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import BrandIcon1 from '@/assets/images/brandIcon1.webp'
import BrandIcon2 from '@/assets/images/brandIcon2.webp'
import BrandIcon3 from '@/assets/images/brandIcon3.webp'
import BrandSlider from '../components/BrandSlider/BrandSlider'
import Btn from '../components/Common/Btn'
import Sec1 from '@/assets/images/sec1.webp'
import ai from '../assets/images/ai.webp'
import MegaCoreSection from '../components/MegaCoreSection/MegaCoreSection'
import TabGallerySection from '../components/TabGallerySection/TabGallerySection'
import FeatureHub from '../components/FeatureHub/FeatureHub'
import Sec2Img from '@/assets/images/sec2.webp'
import Sec3Img from '@/assets/images/sec3right.webp'
import Sec4Img from '@/assets/images/sec4.webp'
import FullGridReveal from '../components/IntegrationGrid/IntegrationGrid'
import BottomMailSec from '../components/BottomMailSec/BottomMailSec'
import Faq from '../components/Faq/Faq'
import Progress from '../components/Progress/Progress'
import EmailFrom from '../components/EmailFrom/EmailFrom'

const Home = ({ onOpenModal }) => {
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
    const sec3Data = ['School Administrators', 'Teachers & Staff', 'Parents & Guardians', 'Students', 'Finance Departments', 'IT Teams']
    return (
        <>
            <Seo title="Home" description="Welcome to homepage" />
            <Hero heroData={
                <>
                    <h1>The business software to manage your whole team</h1>
                    <p>Time, talent, finance, and payroll processes unified and automated. <span><img className='img-fluid' src={ai} /></span>  handles the paperwork, you handle the people.</p>
                    <EmailFrom />
                </>}
                slider={<HeroSlider />} />
                
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
                                return <div key={idx} className="col-6 col-md-4 col-lg-3">
                                    <div className="brand_top_data">
                                        <div className="brand_top_left">
                                            <img className='img-fluid' src={data.img} alt="" />
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

            <Progress />

            <MegaCoreSection onOpenModal={onOpenModal} />


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

            {/* Section 2 */}
            <section className="sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="sec2-left">
                                <div className="heading left">
                                    <h2>Cursus turpis  accumsan, A semper lectus vitae</h2>
                                    <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan. </p>
                                </div>
                                <div className="sec2LeftData">
                                    <div className="sec2LeftDataList">
                                        <div className="sec2LeftDataListIcon">
                                            <i className="ri-checkbox-fill"></i>
                                        </div>
                                        <div className="sec2LeftDataListData">
                                            <h3>Arisus nulla posuere</h3>
                                            <p>A semper lectus dignissim risus nulla posuere. Sem lorem </p>
                                        </div>
                                    </div>
                                    <div className="sec2LeftDataList">
                                        <div className="sec2LeftDataListIcon">
                                            <i className="ri-checkbox-fill"></i>
                                        </div>
                                        <div className="sec2LeftDataListData">
                                            <h3>Arisus nulla posuere</h3>
                                            <p>A semper lectus dignissim risus nulla posuere. Sem lorem </p>
                                        </div>
                                    </div>
                                    <div className="sec2LeftDataList">
                                        <div className="sec2LeftDataListIcon">
                                            <i className="ri-checkbox-fill"></i>
                                        </div>
                                        <div className="sec2LeftDataListData">
                                            <h3>Arisus nulla posuere</h3>
                                            <p>A semper lectus dignissim risus nulla posuere. Sem lorem </p>
                                        </div>
                                    </div>
                                    <div className="sec2LeftDataList">
                                        <div className="sec2LeftDataListIcon">
                                            <i className="ri-checkbox-fill"></i>
                                        </div>
                                        <div className="sec2LeftDataListData">
                                            <h3>Arisus nulla posuere</h3>
                                            <p>A semper lectus dignissim risus nulla posuere. Sem lorem </p>
                                        </div>
                                    </div>
                                </div>
                                <Btn text={"Get Request for Access"} name={"primary"} onClick={onOpenModal} />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="sec2Right">
                                <img className='img-fluid' src={Sec2Img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
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

            {/* Section 4 */}
            <section className="sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="sec4Left">
                                <img className='img-fluid' src={Sec4Img} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="sec4Right">
                                <h2>Cursus turpis  accumsan, A semper lectus vitae</h2>
                                <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan. </p>
                                <p>Lorem ipsum dolor sit amet consectetur. Tortor etiam dis pellentesque semper feugiat lectus nisi a. Egestas porttitor fermentum faucibus augue. Luctus sit pretium ultrices dictumst at pellentesque faucibus. Eleifend urna ut in ultricies tempor placerat. Augue ac leo consequat faucibus. Donec vel nibh nulla lectus morbi donec orci viverra tincidunt. Nam cursus nec platea euismod. Ut amet suspendisse amet morbi nisi feugiat. Cursus diam purus .</p>
                                <Btn text={"Get Request for Access"} name={"primary"} onClick={onOpenModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FullGridReveal />

            <BottomMailSec />

            <Faq />
        </>
    )
}

export default Home
