import React from 'react';

const timelineData = [
  {
    year: '2015',
    icon: '🌱',
    title: '2015 — The Beginning',
    description: 'Three co-founders, one shared frustration with legacy HR software, and a rented office in Lahore. MegaHCM was born from a genuine pain point.',
    side: 'left',
  },
  {
    year: '2017',
    icon: '🚀',
    title: '2017 — First 100 Companies',
    description: 'We hit our first milestone of 100 paying customers. The product expanded from basic attendance to full payroll management.',
    side: 'right',
  },
  {
    year: '2019',
    icon: '🌍',
    title: '2019 — Regional Expansion',
    description: 'Launched the MegaHCM mobile app for iOS and Android. Employees could now manage leaves, view payslips, and clock in from anywhere.',
    side: 'left',
  },
  {
    year: '2021',
    icon: '📱',
    title: '2021 — Mobile-First Rebuild',
    description: 'Launched the MegaHCM mobile app for iOS and Android. Employees could now manage leaves, view payslips, and clock in from anywhere.',
    side: 'right',
  },
  {
    year: '2023',
    icon: '🏆',
    title: '2023 — 10,000 Companies',
    description: 'Crossed the 10,000 company milestone and launched MegaHCM Core — our AI-powered analytics and performance management suite.',
    side: 'left',
  },
  {
    year: '2025',
    icon: '⭐',
    title: '2025 — Today & Beyond',
    description: '12,000+ companies. New markets. AI-first features. We\'re just getting started on our mission to make workforce management effortless across the region.',
    side: 'right',
  },
];

const Timeline = () => {
  return (
    <section className="timeline-wrapper">
      <div className="container">
        <div className="heading">
          <h2>A decade of building better HR</h2>
          <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque</p>
        </div>

        <div className="timeline-row-wrapper">
          <div className="row">
            {timelineData.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* Agar side 'right' hai, to left side par khali flex box aayega (Desktop par) */}
                {item.side === 'right' && (
                  <div className="col-12 col-md-6 col-lg-6 box-none d-none d-lg-block "></div>
                )}

                {/* Actual Content Card */}
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="timeline-box">
                    {/* Dynamic 'left' ya 'right' class span par */}
                    <span className={item.side === 'left' ? 'right' : 'left'}>
                      {item.year}
                    </span>
                    <h3>{item.icon} {item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Agar side 'left' hai, to right side par khali flex box aayega (Desktop par) */}
                {item.side === 'left' && (
                  <div className="col-12 col-md-6 col-lg-6 box-none d-none d-lg-block"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;