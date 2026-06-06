import React, { useEffect, useRef } from 'react';
import LogoIcon from "@/assets/images/logoIcon.webp";

const HUB_FEATURES = [
  { id: 1, title: "Payroll", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 2, title: "Human Resources", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 3, title: "Onboarding", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 4, title: "Time Tracking", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 5, title: "Reporting", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 6, title: "Mobile App", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." },
  { id: 7, title: "Dedicated Support", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum..." }
];

const FeatureHub = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const animateOrbit = () => {
      // 1. Only apply the JS rotation engine on desktop screens
      if (window.innerWidth > 575 && containerRef.current) {
        const items = containerRef.current.querySelectorAll('.spoke-item');
        const totalItems = items.length;
        
        // Define your layout dimensions
        const radiusX = 380; // Horizontal width of orbit ellipse
        const radiusY = 320; // Vertical height of orbit ellipse
        
        // Increment the angle for continuous slow motion (lower number = smoother/slower)
        angleRef.current += 0.0015; 

        items.forEach((item, idx) => {
          // Equidistantly space the 7 cards around the 360-degree loop ($2\pi$ radians)
          const baseAngle = (idx / totalItems) * Math.PI * 2;
          const currentAngle = baseAngle + angleRef.current;

          // Trigonometric positional calculation relative to the central origin container point
          const x = Math.cos(currentAngle) * radiusX;
          const y = Math.sin(currentAngle) * radiusY;

          // Apply smooth transform position vectors
          item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
      }

      requestRef.current = window.requestAnimationFrame(animateOrbit);
    };

    requestRef.current = window.requestAnimationFrame(animateOrbit);

    return () => {
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <section className="feature-hub-section py-5">
      <div className="container custom-hub-container text-center">
        
        <div className="hub-header heading">
          <h2 className="hub-main-title">Sem gravida tincidunt<br />unt scelerisque sedipsum</h2>
        </div>

        {/* REVOLVING DIAL STAGE */}
        <div className="hub-diagram-stage" ref={containerRef}>
          
          {/* CENTRAL NETWORK ICON */}
          <div className="center-node-core">
            <div className="core-logo-badge">
              <img className='img-fluid' src={LogoIcon} alt="Logo" />
            </div>
          </div>

          {/* RADIATING FEATURES */}
          {HUB_FEATURES.map((feature) => (
            <div key={feature.id} className="spoke-item">
              <div className="spoke-content-box">
                <div className="spoke-icon-wrapper">
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
    </section>
  );
};

export default FeatureHub;