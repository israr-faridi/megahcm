import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Col, Form, Row } from "react-bootstrap";

const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Minimum 3 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    lastName: yup.string().required('Last name is required'), // Added field for structure balance
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Minimum 10 digits')
        .max(15, 'Phone number too long'),
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

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', `${data.name} ${data.lastName}`);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('company', data.company || '');
        formData.append('service', data.service);
        formData.append('message', data.message);

        try {
            const response = await fetch('https://sourcecodetesting.com/brand/hassan/sendMail.php', {
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
                    {/* First Name */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                isInvalid={!!errors.name}
                                {...register('name')}
                                placeholder="John"
                            />
                            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    
                    {/* Last Name */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                isInvalid={!!errors.lastName}
                                {...register('lastName')}
                                placeholder="Doe"
                            />
                            <Form.Control.Feedback type="invalid">{errors.lastName?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {/* Work Email */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Work Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                isInvalid={!!errors.email}
                                {...register('email')}
                                placeholder="john@company.com"
                            />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    
                    {/* Phone */}
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                isInvalid={!!errors.phone}
                                {...register('phone')}
                                placeholder="+1 (555) 000-0000"
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Company Name - Full Width */}
                <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('company')}
                        placeholder="Your Company"
                    />
                </Form.Group>

                {/* Subject Selector Dropdown - Full Width */}
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

                {/* Message Textarea - Full Width */}
                <Form.Group className="mb-4">
                    <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        isInvalid={!!errors.message}
                        {...register('message')}
                        placeholder="Tell us how we can help..."
                    />
                    <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
                </Form.Group>

                {/* Perfect Left Aligned Rounded Action Button */}
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