import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Col, Container, Form, Row } from "react-bootstrap"


// 1. Define the Validation Schema with max limits
const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Minimum 3 characters')
        .max(50, 'Name cannot exceed 50 characters'), // Validation limit
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Minimum 10 digits')
        .max(15, 'Phone number too long'), // Validation limit
    service: yup.string().required('Please select a service'),
    message: yup.string()
        .required('Message cannot be empty')
        .min(10, 'Tell us a bit more')
        .max(500, 'Message cannot exceed 500 characters'), // Validation limit
});
const FooterFormMain = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange" // Validates as the user types
    });

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        reset();
        navigate('/thank-you'); // 3. Redirect here
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
                                maxLength={50} // Hard limit: User cannot type more
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
    )
}

export default FooterFormMain
