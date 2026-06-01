import React, { useState } from 'react';
// import HeroSlider from './HeroSlider'; // Your existing Swiper slider component
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import MegaCore1 from '@/assets/images/megacore1.webp'
import Btn from '../Common/Btn';

// Centralized mock data structure matching the image layouts
const CORE_SERVICES_DATA = {
    "Human Resources": {
        title: "MegaHcm HR Management",
        desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet.",
        features: ["Asemper lectus", "Sem gravida", "Risus nulla posuere", "Asemper lectus", "Sem lorem tempor"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Talent Management": {
        title: "Talent Management",
        desc: "A semper lectus dignissim risus nulla posuere. Sem lorem tempor mauris senectus sed interdum sapien consectetuer a. Malesuada eu nisl orci imperdiet. Sem gravida tincidunt scelerisque sed ipsum mauris. Cursus turpis vitae accumsan. A semper lectus dignissim risus nulla posuere.",
        features: ["Asemper lectus", "Sem gravida", "Risus nulla posuere", "Asemper lectus", "Sem lorem tempor"],
        mockupImg: MegaCore1
    },
    "Workforce Management": {
        title: "Workforce Optimization",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Payroll": {
        title: "Payroll",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Attendance Management": {
        title: "Attendance Management",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Employee Management": {
        title: "Employee Management",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Inventory Management": {
        title: "Inventory Management",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Inventory Management": {
        title: "Inventory Management",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    "Vehicle Inspection": {
        title: "Vehicle Inspection",
        desc: "Streamline scheduling and shifts layout tracking with custom automation rules built into your operational matrix grid dashboards.",
        features: ["Shift Scheduling", "Time Tracking", "Overtime Management", "Roster Planner"],
        showCustomSlider: false,
        mockupImg: MegaCore1
    },
    // Add other navigation objects as needed...
};

const MegaCoreSection = () => {
    const [activeTab, setActiveTab] = useState("Talent Management");
    const tabContent = CORE_SERVICES_DATA[activeTab] || CORE_SERVICES_DATA["Talent Management"];

    return (
        <section className="mega-core-wrapper py-5">
            <div className="container-fluid custom-layout-container">
                <div className="heading">
                    <h2>MegaHcm Core</h2>
                </div>

                <div className="row g-4">
                    {/* LEFT SIDEBAR NAVIGATION */}
                    <div className="col-lg-3 col-md-4">
                        <div className="sidebar-tabs-nav">
                            {Object.keys(CORE_SERVICES_DATA).map((tabName) => (
                                <button
                                    key={tabName}
                                    className={`sidebar-nav-btn ${activeTab === tabName ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tabName)}
                                >
                                    {tabName}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT PANELS INTERACTIVE GRID CONTENT */}
                    <div className="col-lg-9 col-md-8">
                        <div className="content-display-whiteboard">
                            <div className="row align-items-center g-4">

                                {/* Text Data Column */}
                                <div className="col-xl-5 col-lg-6">
                                    <div className="info-block-content">
                                        <h3 className="content-heading">{tabContent.title}</h3>
                                        <p className="content-description">{tabContent.desc}</p>

                                        <div className="action-buttons-group mb-4">
                                            <Btn text={"Explore Now"} name={"primary"} />
                                            <Btn text={"Get Request"} name={"noActive"} />
                                        </div>

                                        <h4 className="features-sub-title">{tabContent.title}</h4>
                                        <ul className="features-bullet-list">
                                            {tabContent.features.map((feat, idx) => (
                                                <li key={idx} className="bullet-item">{feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Display Visual / Slider Dynamic Column */}
                                <div className="col-xl-7 col-lg-6">
                                    <div className="visual-media-stage">

                                        <div className="laptop-mockup-frame">
                                            <img src={tabContent.mockupImg} alt="Dashboard mockup" className="img-fluid screen-img" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MegaCoreSection;