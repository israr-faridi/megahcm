import React from 'react';
import LogoIcon from "@/assets/images/logoIcon.webp"

const HUB_FEATURES = [
  { id: 1, title: "Payroll", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 2, title: "Human Resources", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 3, title: "Onboarding", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 4, title: "Time Tracking", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 5, title: "Reporting", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 6, title: "Mobile App", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
  { id: 7, title: "Dedicated Support", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." }
];

const FeatureHub = () => {
  return (
    <section className="feature-hub-section py-5">
      <div className="container custom-hub-container text-center">
        
        {/* TOP TITLE AREA */}
        <div className="hub-header heading">
          <h2 className="hub-main-title">Sem gravida tincidunt<br />unt scelerisque sedipsum</h2>
          <p className="hub-subtitle mx-auto">
            A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien 
            consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus 
            turpis vitae accumsan. A semper lectus dignissim risus nulla posuere.
          </p>
        </div>

        {/* REVOLVING DIAL STAGE */}
        <div className="hub-diagram-stage">
          
          {/* CENTRAL NETWORK ICON */}
          <div className="center-node-core">
            <div className="core-logo-badge">
             <img className='img-fluid' src={LogoIcon} alt="" />
            </div>
          </div>

          {/* RADIATING FEATURES INNER CONTAINER */}
          <div className="features-spoke-grid">
            {HUB_FEATURES.map((feature, idx) => (
              <div key={feature.id} className={`spoke-item item-${idx + 1}`}>
                {/* Decorative Spoke Line */}
                
                <div className="spoke-content-box">
                  <div className="spoke-icon-wrapper">
                    {/* Gear/Team Icon SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-4 5v-.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v.5" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 2a10 10 0 0 1 7.54 16.58l-1.42-1.42A8 8 0 1 0 5.88 15.16l-1.42 1.42A10 10 0 0 1 12 2Z" fill="#0084ff"/>
                    </svg>
                  </div>
                  <h4 className="spoke-card-title">{feature.title}</h4>
                  <p className="spoke-card-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureHub;