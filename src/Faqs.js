import React, { useState } from "react";
import './Faqs.css';
import inactiveArrow from './images/blue-arrow.svg';
import inactiveCircle from './images/blue-circle.svg';
import activeArrow from './images/orange-arrow.svg';
import activeCircle from './images/orange-circle.svg';

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  const faqs = [
    { question: "What is a payment gateway?", answer: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players." },
    { question: "Do I need to pay to Instapay even when there is no transaction going on in my business?", answer: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!" },
    { question: "What platforms does Instapay payment gateway support?", answer: "Instapay helps you accept online payments from customers across Desktop, Mobile web, Android & iOS globally." },
    { question: "Does Instapay provide international payments support?", answer: "Yes, Instapay provides support for International transactions. We support all major international cards and 92 currencies including USD, EUR, GBP, SGD, AED." },
    { question: "Is there any setup fee or annual maintainance fee that I need to pay regularly?", answer: "We do not charge for the setup and annual maintainance. You only pay for the plan that you are opting to." },
    ];
    
    return (
        <div className='Faqs container'>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        <span className='faq-text-icon'>
                            <img className="circle" src={activeIndex === index ? activeCircle : inactiveCircle} alt="circle" />
                            <span className="faq-text">{faq.question}</span>
                        </span>
                        <span className={`faq-icon ${activeIndex === index ? "active" : ""}`}>
                            <img className="arrow" src={activeIndex === index ? activeArrow : inactiveArrow} alt="arrow" />
                        </span>
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}