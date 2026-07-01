import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Col, Form, Row } from "react-bootstrap";

const schema = yup.object().shape({
    name: yup.string()
        .required('First name is required')
        .min(3, 'Minimum 3 characters')
        .max(33, 'Cannot exceed 33 characters'),
    lastName: yup.string()
        .required('Last name is required')
        .max(33, 'Cannot exceed 33 characters'),
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required')
        .max(50, 'Email cannot exceed 50 characters'),
    phone: yup.string()
        .required('Phone number is required')
        .min(11, 'Minimum 11 digits')
        .max(14, 'Phone number too long'),
    company: yup.string(),
    service: yup.string().required('Please select a topic'),
    message: yup.string()
        .required('Message cannot be empty')
        .min(10, 'Tell us a bit more')
        .max(500, 'Message cannot exceed 500 characters'),
});

const FooterFormMain = ({ onCloseModal }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    // 1. Name Restrictor: Sirf letters aur spaces type karne dega (Numbers/Special chars are blocked)
    const handleNameKeyDown = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', ' '];
        // Agar pressed key koi letter nahi hai (a-z, A-Z) aur allowed controls mein bhi nahi hai to block karo
        if (!/[a-zA-Z]/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };
    // 1. Phone Restrictor: Sirf numbers allow karega aur backspace/delete wagera
    const handlePhoneKeyDown = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        // Agar key number nahi hai aur allowed keys mein bhi nahi hai, to block kar do
        if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', `${data.name} ${data.lastName}`);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('company', data.company || '');
        formData.append('service', data.service);
        formData.append('message', data.message);

        try {
            const response = await fetch('https://sourcecodetesting.com/ebook/israr/sendMail.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                reset();
                if (onCloseModal) onCloseModal();
                navigate('/thank-you');
            } else {
                alert(`Server Error: ${result.message || "Failed to deliver message."}`);
            }
        } catch (error) {
            console.error("Network communication error:", error);
            alert("Network error: Unable to contact mail relay pipeline.");
        }
    };

    return (
        <div className="custom-design-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    {/* First Name - Numbers, Special Chars, Alphabets allowed up to 50 */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={33} // Hard limit typing restriction
                                onKeyDown={handleNameKeyDown}
                                isInvalid={!!errors.name}
                                {...register('name')}
                                placeholder="John"
                            />
                            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Last Name - Numbers, Special Chars, Alphabets allowed up to 50 */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={33} // Hard limit typing restriction
                                onKeyDown={handleNameKeyDown}
                                isInvalid={!!errors.lastName}
                                {...register('lastName')}
                                placeholder="Doe"
                            />
                            <Form.Control.Feedback type="invalid">{errors.lastName?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {/* Work Email - Hard limited to 50 */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Work Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                maxLength={50} // Restricts extra characters for email length
                                isInvalid={!!errors.email}
                                {...register('email')}
                                placeholder="john@company.com"
                            />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Phone - Only digits allowed & max 15 digits */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={14} // Hard limit number length
                                onKeyDown={handlePhoneKeyDown} // Blocks alphabets and symbols inline
                                isInvalid={!!errors.phone}
                                {...register('phone')}
                                placeholder="1234567890"
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Company Name */}
                <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        maxLength={100}
                        {...register('company')}
                        placeholder="Your Company"
                    />
                </Form.Group>

                {/* Subject Dropdown */}
                <Form.Group className="mb-3 custom-select-wrapper">
                    <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                        isInvalid={!!errors.service}
                        {...register('service')}
                    >
                        <option value="">Select a topic</option>
                        <option value="ebook-cover-design">EBook Cover Design</option>
                        <option value="ebook-editing">EBook Editing</option>
                        <option value="ebook-writng">EBook Writing</option>
                        <option value="ebook-publishing">EBook Publishing</option>
                        <option value="ebook-marketing">EBook Marketing</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.service?.message}</Form.Control.Feedback>
                </Form.Group>

                {/* Message - Max 500 characters */}
                <Form.Group className="mb-4">
                    <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        maxLength={500} // Hard limit message length
                        isInvalid={!!errors.message}
                        {...register('message')}
                        placeholder="Tell us how we can help..."
                    />
                    <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
                </Form.Group>

                <div className="fromBtn text-start">
                    <Button type="submit" className="custom-submit-pill">
                        Send Message
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default FooterFormMain;