import React, { useState } from 'react';
// import MockupIMg1 from "@/assets/images/gallery1.webp"
import MockupIMg1 from "@/assets/images/gallery1.webp"

// Sample data structure to manage content updates for each tab option
const GALLERY_TABS_DATA = {
    "HR & Payroll": {
        heading: "Cursus turpis vitae accu msan Asemperturpis",
        subheading: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt.",
        mockupImage: MockupIMg1, // Replace with actual asset paths
        cards: [
            { id: 1, title: "Malesuada eu nislorci", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
            { id: 2, title: "Malesuada eu nislorci", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." },
            { id: 3, title: "Malesuada eu nislorci", desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris." }
        ]
    },
    "Time & Planning": {
        heading: "Optimize Working Hours flawlessly",
        subheading: "Track employee check-ins, leaves, and shifting schedules seamlessly with integrated dashboard calendars.",
        mockupImage: "https://placehold.co/1000x600/f0fdf4/166534?text=Time+and+Planning+Dashboard+Mockup",
        cards: [
            { id: 1, title: "Shift Scheduler", desc: "Easily distribute workloads across teams without worrying about overlapping time windows or resource shortages." },
            { id: 2, title: "Attendance Tracker", desc: "Real-time clocking metrics showing geo-fencing analytics right inside your system profile parameters." },
            { id: 3, title: "Leave Workflow", desc: "Automated submission and approvals pathways for vacation requests and sudden medical alerts." }
        ]
    },
    "Talent Management": { heading: "Find the best fits faster", subheading: "Manage pipeline flows seamlessly.", mockupImage: "https://placehold.co/1000x600/faf5ff/6b21a8?text=Talent+Management+Mockup", cards: [{ id: 1, title: "Smart Sourcing", desc: "Data breakdown example description line." }, { id: 2, title: "Interview Boards", desc: "Data breakdown example description line." }, { id: 3, title: "Hiring Funnels", desc: "Data breakdown example description line." }] },
    "Finance": { heading: "Track organizational spend profiles", subheading: "Payroll cost matrices combined effortlessly.", mockupImage: "https://placehold.co/1000x600/fff7ed/9a3412?text=Finance+Mockup", cards: [{ id: 1, title: "Ledger", desc: "Description here." }, { id: 2, title: "Audit Paths", desc: "Description here." }, { id: 3, title: "Tax Syncing", desc: "Description here." }] },
    "IT": { heading: "System logs and security configurations", subheading: "Complete administrative architecture.", mockupImage: "https://placehold.co/1000x600/f8fafc/334155?text=IT+Dashboard+Mockup", cards: [{ id: 1, title: "OAuth Logins", desc: "Description here." }, { id: 2, title: "Node Metrics", desc: "Description here." }, { id: 3, title: "API Enclaves", desc: "Description here." }] }
};

const TabGallerySection = () => {
    const [activeTab, setActiveTab] = useState("HR & Payroll");
    const currentData = GALLERY_TABS_DATA[activeTab];

    return (
        <div className="tab-gallery-section py-5">
            <div className="custom-gallery-container">

                {/* TOP PILL NAVIGATION LINK CAPSULE */}
                <div className="gallery-nav-pill-wrapper">
                    {Object.keys(GALLERY_TABS_DATA).map((tabName) => (
                        <button
                            key={tabName}
                            className={`gallery-nav-pill-btn ${activeTab === tabName ? 'active' : ''}`}
                            onClick={() => setActiveTab(tabName)}
                        >
                            {tabName}
                        </button>
                    ))}
                </div>

                {/* TEXT INTRO HEADER BLOCK */}
                <div className="gallery-header-block row align-items-start g-4">
                    <div className="col-md-5">
                        <h3 className="gallery-main-title">{currentData.heading}</h3>
                    </div>
                    <div className="col-md-7">
                        <p className="gallery-subtitle">{currentData.subheading}</p>
                    </div>
                </div>

                {/* MAIN VISUAL DISPLAY LAYOUT FRAME */}
                <div className="gallery-display-stage">
                    <div className="mockup-window-shadow">
                        <img
                            src={currentData.mockupImage}
                            alt={`${activeTab} dashboard preview`}
                            className="img-fluid central-mockup-graphic"
                        />
                    </div>
                </div>

                {/* THREE BOTTOM ICON INFORMATION CARDS */}
                <div className="gallery-features-row row g-4">
                    {currentData.cards.map((card) => (
                        <div key={card.id} className="col-lg-4 col-md-6">
                            <div className="gallery-feature-icon-card">
                                <div className="feature-card-icon-container">
                                    {/* Decorative Icon SVG mimicking your team matrix graphic */}
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7 6v-1a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1" stroke="#0084ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="6" cy="8" r="1.5" stroke="#0084ff" strokeWidth="2" />
                                        <circle cx="18" cy="8" r="1.5" stroke="#0084ff" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h4 className="feature-card-title">{card.title}</h4>
                                <p className="feature-card-description">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TabGallerySection;