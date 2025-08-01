// components/ContactForm.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import classes from './ContactForm.module.css'; // Adjust the path as necessary

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required.';
    }

    if (!formData.subject.trim() || formData.subject.length < 5)
      newErrors.subject = 'Subject should be at least 5 characters.';

    if (!formData.message.trim() || formData.message.length < 5) {
      newErrors.message = 'Message should be at least 5 characters.';
    }

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/send-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5" style={{ background: '#ffff' }}>
      <Container>
        <h3 className={`${classes.getInTouch} mb-4 fw-bold`}>Get in Touch</h3>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3 mb-md-0">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Col>
          </Row>

          {submitStatus && (
            <Alert
              variant={submitStatus.success ? 'success' : 'danger'}
              className="mt-3"
            >
              {submitStatus.message}
            </Alert>
          )}

          <div className="d-flex justify-content-end">
            <Button
              variant="warning"
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#c17d1f',
                border: 'none',
                padding: '10px 30px',
                color: '#fff',
                width: '50%',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Now'}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
