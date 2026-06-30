import React from 'react'
import Drive1 from '../../assets/images/drive1.webp'
import Drive2 from '../../assets/images/drive2.webp'
import Drive3 from '../../assets/images/drive3.webp'
import Drive4 from '../../assets/images/drive4.webp'
import Drive5 from '../../assets/images/drive5.webp'
import Drive6 from '../../assets/images/drive6.webp'
const Drives = () => {
    const drive = [
        {
            img: Drive1,
            heading: "People First",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
        {
            img: Drive2,
            heading: "Trusted by Default",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
        {
            img: Drive3,
            heading: "Speed Without Compromise",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
        {
            img: Drive4,
            heading: "Built for Our Region",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
        {
            img: Drive5,
            heading: "Partnership Mindset",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
        {
            img: Drive6,
            heading: "Nationwide Network",
            para: "Lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris."
        },
    ]
    return (
        <section className='drives'>
            <div className="container">
                <div className="heading left">
                    <h2>What drives <span>everything we build</span></h2>
                    <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque</p>
                </div>

                <div className="drive-wrapper">
                    {drive.map((item, idx) => {
                        return <div key={idx} className="drive-box">
                            <div className="drive-box-img">
                                <img className='img-fluid' src={item.img} alt="" />
                            </div>
                            <div className="drive-box-data">
                                <h3>{item.heading}</h3>
                                <p>{item.para}</p>
                            </div>

                        </div>
                    })}
                </div>
            </div>

        </section>
    )
}

export default Drives
