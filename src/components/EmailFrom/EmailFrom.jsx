import React, { useState } from 'react';
import Btn from '../Common/Btn';

function EmailFrom() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // State for popup

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleAction = (e) => {
        if (e) e.preventDefault();

        if (!email || !validateEmail(email)) {
            setError(true);
        } else {
            setError(false);
            
            // 1. Show the popup
            setIsSubmitted(true);
            
            // 2. Clear the input field
            setEmail('');

            // 3. Hide popup after 3 seconds (3000ms)
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);

            console.log("Success:", email);
        }
    };

    return (
        <>
            <form className='emailFrom' onSubmit={handleAction} noValidate>
                <div className="input-container">
                    {error && (
                        <span className="error-icon" title="Invalid Email">
                            <i className="ri-error-warning-line"></i>
                        </span>
                    )}
                    <input
                        type="email"
                        placeholder='Work email address'
                        value={email}
                        maxLength={29}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(false);
                        }}
                        className={error ? 'input-error' : ''}
                    />
                </div>
                <Btn text={"Start for free"} name={"primary"} onClick={handleAction} />
            </form>

            {/* Thank You Popup */}
            {isSubmitted && (
                <div className="thank-you-popup">
                    <p>Thank you! Your request has been sent.</p>
                </div>
            )}
        </>
    );
}

export default EmailFrom;