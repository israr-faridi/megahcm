import React from 'react'
import Seo from '../components/Common/Seo'
import Hero from '../components/Hero/Hero'
// import ServicesHero from '../assets/images/servicesHero.webp'
import Btn from '../components/Common/Btn'
import Lists from '../components/Common/Lists'
import ServicesTwoColum from '../components/ServicesTwoColum/ServicesTwoColum'
import TwoBtn from '../components/Common/TwoBtn'
import BottomMailSec from '../components/BottomMailSec/BottomMailSec'
import Faq from '../components/Faq/Faq'
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider'
// Images
import ServiceHero from '../assets/images/recruitment1.webp'
import Blank1 from "../assets/images/attendance2.webp"
import Blank2 from "../assets/images/recruitment3.webp"
import MobileImg from "../assets/images/recruitment4.webp"

const Recruitment = ({onOpenModal}) => {
  // section1
  const sec1Data = [{
    heading: <>Arcuiaculis nulla enim commodo <span>ornare tortor</span></>,
    para: "Lorem ipsum dolor sit amet consectetur. Molestie blandit ac tellus penatibus nibh tincidunt faucibus. A ante diam molestie sit quis. Sed pharetra nunc in sed morbi pellentesque. Sagittis risus ut iaculis netus enim senectus tellus quam fermentum. Elit pellentesque eu interdum in et. Id arcu magna faucibus sed est. Cum ut libero hac adipiscing morbi eget est ullamcorper. Eget in natoque quis eget dolor viverra. Lobortis gravida eu suspendisse odio viverra lectus tristique. Ut vitae aliquet enim in. Vulputate ac donec ultrices dui aenean arcu elementum euismod adipiscing. Eget arcu suspendisse vel pellentesque volutpat felis non aliquam.",
    img: Blank1,
    FirstText: "Start for Free",
    FirstName: "primary",
    FirstOnClick: onOpenModal,
    SecondText: "Watch Overview",
    SecondName: "noActive",
    SecondOnClick: onOpenModal
  }]


  // Section2
  const sec2Data = [{
    heading: <>Vulputate <span> acdon ecultrces</span> dui aenean</>,
    para: "Lorem ipsum dolor sit amet consectetur. Molestie blandit ac tellus penatibus nibh tincidunt faucibus. A ante diam molestie sit quis. Sed pharetra nunc in sed morbi pellentesque. Sagittis risus ut iaculis netus enim senectus tellus quam fermentum.",
    img: Blank2,
  }]
  const sec2List = [{
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  }, {
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  },
  {
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  },]

  // Section3
  const sec3Data = [{
    name: "thirdImg",
    heading: "Pharetra nunc in sedmorbi pellentesque",
    para: "Lorem ipsum dolor sit amet consectetur. Molestie blandit ac tellus penatibus nibh tincidunt faucibus. A ante diam molestie sit quis. Sed pharetra nunc in sed morbi pellentesque. Sagittis risus ut iaculis netus enim senectus tellus quam fermentum.",
    img: MobileImg,
    flip: "flip",
    FirstText: "Start for Free",
    FirstName: "primary",
    FirstOnClick: onOpenModal,
    SecondText: "Watch Overview",
    SecondName: "noActive",
    SecondOnClick: onOpenModal
  }]
  const sec3List = [{
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  }, {
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  },
  {
    heading: "Arisus nulla posuere",
    para: "A semper lectus dignissim risus nulla posuere. Sem lorem"
  },]
  return (
    <>
      <Seo title="Recruitment" description="Welcome to Recruitmentpage" />
      <Hero mainclass={"services"}
        heroData={
          <>
            <div className="row g-4">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="heroDataLeft">
                  <h1>Accurate Recruitment Management <span>Empowering Workforce</span></h1>
                  <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet.</p>
                  <div className="heroLeftBtn">
                    <Btn text={"Start for free"} name={"primary"} onClick={onOpenModal} />
                    <Btn text={"Watch Overview"} name={"noActive"} onClick={onOpenModal} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="heroDataRight">
                  <img className='img-fluid' src={ServiceHero} alt="" />
                </div>
              </div>
            </div>
          </>
        } />

      {/* Section 1 */}

      {sec1Data.map((item, idx) => {
        return <>
          <ServicesTwoColum key={idx}
            heading={item.heading}
            para={item.para}
            img={item.img}
            Btns={<TwoBtn FirstText={item.FirstText} FirstName={item.FirstName} FirstOnClick={item.FirstOnClick} SecondText={item.SecondText} SecondName={item.SecondName} SecondOnClick={item.SecondOnClick} />} /></>
      })}

      {/* Section 2 */}
      {sec2Data.map((item, idx) => {
        return <>
          <ServicesTwoColum
            key={idx}
            heading={item.heading}
            para={item.para}
            img={item.img}
            name={"flip"}
            List={sec2List.map((data, index) => {
              return <Lists key={index} heading={data.heading} para={data.para}
              />
            })} />
        </>
      })}

      {/* Section 3 */}
      {sec3Data.map((item, idx) => {
        return <>
          <ServicesTwoColum
            key={idx}
            name={item.name}
            heading={item.heading}
            para={item.para}
            img={item.img}
            List={sec2List.map((data, index) => {
              return <Lists key={index} heading={data.heading} para={data.para} />
            })}
            Btns={<TwoBtn FirstText={item.FirstText} FirstName={item.FirstName} FirstOnClick={item.FirstOnClick} SecondText={item.SecondText} SecondName={item.SecondName} SecondOnClick={item.SecondOnClick} />} />
        </>
      })}

      {/* Review Slider */}
      <ReviewsSlider />
      {/* Brand gallery */}
      <BottomMailSec />

      {/* Faq */}
      <Faq />


    </>
  )
}

export default Recruitment
