import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Col, Form, Row } from "react-bootstrap";

// Define the Validation Schema with max limits
const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Minimum 3 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Minimum 10 digits')
        .max(15, 'Phone number too long'),
    service: yup.string().required('Please select a service'),
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

    // CONNECTED SUBMIT ENGINE
    const onSubmit = async (data) => {
        // 1. Pack the plain object into a Form Data sequence matching $_POST expectations
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('service', data.service);
        formData.append('message', data.message);

        // Optional parameter based on your PHP schema mapping checks
        // formData.append('genre', ''); 

        try {
            // 2. Transmit the payload payload to your live hosted endpoint
            const response = await fetch('https://sourcecodetesting.com/brand/hassan/sendMail.php', {
                method: 'POST',
                body: formData, // Native Form encoded headers are generated automatically by browsers
            });

            const result = await response.json();

            if (result.success) {
                console.log("Email sent successfully response:", result.message);
                reset();
                if (onCloseModal) {
                    onCloseModal();
                }
                navigate('/thank-you'); // Redirect on safe verification delivery
            } else {
                alert(`Server Error: ${result.message || "Failed to deliver mail message layout structure."}`);
            }
        } catch (error) {
            console.error("Network communication error routing details:", error);
            alert("Network error: Unable to contact mail relay pipeline.");
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* First Two inputs */}
                <Row>
                    {/* Name Input */}
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={50}
                                isInvalid={!!errors.name}
                                {...register('name')}
                                placeholder="John Doe"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    {/* Email Input */}
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                maxLength={50}
                                isInvalid={!!errors.email}
                                {...register('email')}
                                placeholder="name@example.com"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {/* Phone Input */}
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={15}
                                isInvalid={!!errors.phone}
                                {...register('phone')}
                                placeholder="1234567890"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phone?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Services Dropdown */}
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Service</Form.Label>
                            <Form.Select
                                isInvalid={!!errors.service}
                                {...register('service')}
                            >
                                <option value="">Choose a service...</option>
                                <option value="ebook-cover-design">EBook Cover Design</option>
                                <option value="ebook-editing">EBook Editing</option>
                                <option value="ebook-writng">EBook Writng</option>
                                <option value="ebook-publishing">EBook Publishing</option>
                                <option value="ebook-marketing">EBook Marketing</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.service?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Message Textarea */}
                <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        maxLength={500}
                        isInvalid={!!errors.message}
                        {...register('message')}
                        placeholder="How can we help you?"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="fromBtn">
                    <Button variant="success" type="submit" className="form-btn fw-bold">
                        Send Message
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default FooterFormMain;