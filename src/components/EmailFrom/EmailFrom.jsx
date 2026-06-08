import React, { useState } from 'react';
import Btn from '../Common/Btn';

function EmailFrom() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // State for popup
    const [isSubmitting, setIsSubmitting] = useState(false); // Tracks server state

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleAction = async (e) => {
        if (e) e.preventDefault();

        // 1. Client-side validation check
        if (!email || !validateEmail(email)) {
            setError(true);
            return;
        }

        setError(false);
        setIsSubmitting(true);

        // 2. Prepare Form Data (only passing the email property)
        const formData = new FormData();
        formData.append('email', email);
        
        // These can explicitly be sent blank so your PHP backend captures them safely
        formData.append('name', '');
        formData.append('phone', '');
        formData.append('service', 'Newsletter Subscription'); // Optional: Helps track where it came from
        formData.append('message', 'Subscribed to work email newsletter updates.');

        try {
            // 3. Post to your exact same hosted PHP mail server script
            const response = await fetch('https://sourcecodetesting.com/brand/hassan/sendMail.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                // Show the success toast/popup
                setIsSubmitted(true);
                
                // Clear the input field
                setEmail('');

                // Hide popup after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                alert(`Error: ${result.message || "Failed to submit request."}`);
            }
        } catch (err) {
            console.error("Network communication failure:", err);
            alert("Network error: Could not reach the mail server.");
        } finally {
            setIsSubmitting(false);
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
                        disabled={isSubmitting}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(false);
                        }}
                        className={error ? 'input-error' : ''}
                    />
                </div>
                <Btn 
                    text={isSubmitting ? "Sending..." : "Start for free"} 
                    name={"primary"} 
                    onClick={handleAction} 
                    disabled={isSubmitting}
                />
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