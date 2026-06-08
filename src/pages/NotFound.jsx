import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Btn from '../components/Common/Btn';
import Seo from '../components/Common/Seo';

const NotFound = () => {
    return (
        <>
            <Seo title={"Page Not Found 404"} description={"Page is not Found"}  />
            <section className="not-found-section d-flex align-items-center">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col xs={12} md={8} lg={6}>
                            <div className="not-found-content">
                                {/* Large Stylized Error Code */}
                                <h1 className="error-code">404</h1>

                                {/* Error Headers */}
                                <h2 className="error-heading">Page Not Found</h2>
                                <p className="error-message">
                                    Oops! The page you are looking for doesn't exist, has been removed,
                                    or is temporarily unavailable.
                                </p>

                                {/* Back to Safety Link Button */}
                                <div className="mt-4">
                                    <Btn text="Back To Home" name={"primary"} link={"/"} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section></>
    );
};

export default NotFound;