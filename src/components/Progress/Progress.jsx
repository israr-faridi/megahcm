import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Reusable Counter Engine Sub-Component
const CountUp = ({ target, duration = 2000, suffix = "", startTrigger = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTimestamp = null;
    // Extract numbers only if a suffix like '+' or '%' is attached
    const targetNumber = parseInt(target, 10);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easing out formula (Starts fast, slows down at the end)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, startTrigger]);

  return <>{count}{suffix}</>;
};

const Progress = () => {
  // Triggers once when 30% of the stat section enters the viewport runway
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="sec1" ref={ref}>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="sec1_data">
              <div className="heading left">
                <h2>Cursus turpis accumsan, A semper lectus vitae</h2>
                <p>
                  A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="sec1_count">
              
              {/* Box 1: 3X */}
              <div className="sec1_count_box sec1_count_box_bottom sec1_count_box_bottom_left">
                <h3>
                  <CountUp target="3" suffix="X" startTrigger={inView} />
                </h3>
                <p>Faster Workflow</p>
              </div>

              {/* Box 2: 12k+ */}
              <div className="sec1_count_box sec1_count_box_center">
                <h3>
                  <CountUp target="12" suffix="k+" startTrigger={inView} />
                </h3>
                <p>Business Empowered</p>
              </div>

              {/* Box 3: 98% */}
              <div className="sec1_count_box sec1_count_box_bottom sec1_count_box_bottom_right">
                <h3>
                  <CountUp target="98" suffix="%" startTrigger={inView} />
                </h3>
                <p>User Satisfaction Rate</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;