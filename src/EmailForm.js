import React from 'react';
import './EmailForm.css';
import emailIcon from './images/email-icon.svg';

export default function EmailForm() {
    return (
        <div className='emailForm mt-4'>
            <form id="footerForm">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="footerFormEmail"
                />
                <button type="submit" className="footerFormButton">
                    <img src={emailIcon} alt="Submit" />
                </button>
            </form>
        </div>
    )
}