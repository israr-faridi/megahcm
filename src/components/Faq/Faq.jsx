import React, { useState } from 'react';
const FAQ_DATA = [
    { question: "A semper lectus dignissim risus nulla posuere ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." },
    { question: "Sem lorem tempor mauris senectus sed interdum sapien?", answer: "Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed." },
    { question: "Econsectetur a. Malesuada eu nisl orci imperdiet?", answer: "Sed porttitor lectus nibh. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi." },
    { question: "Sem gravida tincidunt sceler?", answer: "Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta." },
    { question: "Tisque sed ipsum mauris ursus turpis vitae accumsan?", answer: "Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." },
    { question: "A semper lectus dignissim risus nulla posuere ?", answer: "Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." },
    { question: "Sem lorem tempor mauris senectus sed interdum sapien?", answer: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat." },
    { question: "Sem gravida tincidunt sceler?", answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta." },
    { question: "Rconsectetur a. Malesuada eu nisl orci imperdiet?", answer: "Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit." }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section py-5">
            <div className="faq-container">

                <div className="faq-list">
                    {FAQ_DATA.map((faq, index) => {
                        const isOpen = activeIndex === index;
                       
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-trigger"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq-question">{faq.question}</span>
                                    <span className="faq-icon-wrapper">
                                        <svg
                                            className="faq-chevron"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>

                                <div className="faq-panel">
                                    <div className="faq-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}

export default Faq
