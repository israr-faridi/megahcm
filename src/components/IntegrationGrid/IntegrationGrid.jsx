import React from 'react';
import { useInView } from 'react-intersection-observer';
import EmailFrom from '../EmailFrom/EmailFrom';

// A clean sample pool of brand logo SVG paths to distribute across all 48 tiles
const LOGO_POOL = [
    'https://cdn.worldvectorlogo.com/logos/google-3.svg',
    'https://cdn.worldvectorlogo.com/logos/sap-2.svg',
    'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    'https://cdn.worldvectorlogo.com/logos/figma-2.svg',
    'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    'https://cdn.worldvectorlogo.com/logos/zoom-2.svg',
    'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
    'https://cdn.worldvectorlogo.com/logos/notion-2.svg',
    'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
    'https://cdn.worldvectorlogo.com/logos/zapier-2.svg',
    'https://cdn.worldvectorlogo.com/logos/twitter-3.svg',
    'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',

    'https://cdn.worldvectorlogo.com/logos/zoom-2.svg',
    'https://cdn.worldvectorlogo.com/logos/twitter-3.svg',
    'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
    'https://cdn.worldvectorlogo.com/logos/sap-2.svg',
    'https://cdn.worldvectorlogo.com/logos/notion-2.svg',
    'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
    'https://cdn.worldvectorlogo.com/logos/zapier-2.svg',
    'https://cdn.worldvectorlogo.com/logos/figma-2.svg',
    'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    'https://cdn.worldvectorlogo.com/logos/google-3.svg',
    'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
];


const FullGridReveal = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Starts filling when 20% of the section enters the screen
    });

    // Generate 48 items automatically by cycling through our logo pool
    const totalBoxes = 48;
    const allGridBoxes = Array.from({ length: totalBoxes }, (_, index) => {
        const logoUrl = LOGO_POOL[index % LOGO_POOL.length];

        // Create a wave or randomized style calculation for the staggered pops
        // This formula pops them in slightly diagonal waves based on row/column index configurations
        const row = Math.floor(index / 12);
        const col = index % 12;
        const computedDelay = (row + col) * 0.08;

        return {
            id: `tile-${index}`,
            logo: logoUrl,
            delay: computedDelay
        };
    });

    return (
        <section className="full-grid-section py-5" ref={ref}>
            <div className="container">
                <div className="heading">
                    <h2>Emper lectus dign
                        issim risus nulla posuere.</h2>
                    <p>A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetur a. Malesuada eu nisl orci imperdiet. </p>
                </div>
                <div className="grid-scroll-axis">
                    <div className={`brand-matrix-mesh ${inView ? 'trigger-reveal' : ''}`}>
                        {allGridBoxes.map((box) => (
                            <div
                                key={box.id}
                                className="mesh-tile-shell"
                                style={{ '--reveal-delay': `${box.delay}s` }}
                            >
                                {/* The actual brand element card inside that scales up and updates the background color */}
                                <div className="active-brand-card">
                                    <img src={box.logo} alt="Partner integration logo" className="mesh-brand-img" />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FullGridReveal;