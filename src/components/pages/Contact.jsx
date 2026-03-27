import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';

const contactHighlights = [
  { label: 'Quick replies', icon: 'mdi:message-fast-outline' },
  { label: 'Project collaboration', icon: 'mdi:account-group-outline' },
  { label: 'Frontend support', icon: 'mdi:laptop' },
  { label: 'Admin & operations support', icon: 'mdi:clipboard-text-clock-outline' },
];

function ContactFormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const successMessage = 'Message sent. Thank you!';

  const closeModal = () => {
    setModalIsOpen(false);
    setIsSending(false);
  };

  const encodeFormData = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setSubmitMessage('');

    const form = event.target;
    const formData = {
      'form-name': 'contact',
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitMessage(successMessage);
    } catch (error) {
      setSubmitMessage('Message failed to send. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    if (submitMessage !== successMessage || !modalIsOpen) {
      return undefined;
    }

    const timer = setTimeout(() => {
      closeModal();
    }, 1800);

    return () => clearTimeout(timer);
  }, [modalIsOpen, submitMessage]);

  return (
    <div id="contact" className="container py-5 mt-3 page-section-anchor">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-12">
          <h1 className="page-title">
            Get in touch
          </h1>
          <div className="intro-card contact-card shadow-lg rounded-5 fw-semibold bg-light p-4">
            <p className="page-subtitle mb-3">Let&apos;s build something great together</p>
            <ul className="contact-grid mb-4 p-0">
              {contactHighlights.map((item) => (
                <li key={item.label} className="contact-item content-text">
                  <span className="contact-icon">
                    <Icon icon={item.icon} width="28" height="28" />
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                className="btn btn-primary contact-btn"
                onClick={() => {
                  setSubmitMessage('');
                  setModalIsOpen(true);
                }}
              >
                Open Contact Form
              </button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Contact Form Modal"
              className="custom-modal shadow-lg container-fluid col-sm-12 col-lg-6 rounded-5"
              tabIndex={-1}
              overlayClassName="custom-overlay overlay"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <form className="contact-modal-form p-3 rounded bg-light shadow w-100" name="contact" method="post" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="contact-modal-title mb-3">Send me a message</p>
                    <p id="contact-form-helper" className="contact-form-helper-text">
                      All fields are required. I will only use your email to reply to this message.
                    </p>
                    <p>
                      <label htmlFor="email">Email </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="form-control"
                        placeholder="Your email"
                        aria-describedby="contact-form-helper email-helper"
                        autoComplete="email"
                      />
                      <small id="email-helper" className="contact-field-helper-text">Use an email address where you want to receive a response.</small>
                    </p>
                    <p>
                      <label htmlFor="message">Message </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        className="form-control mt-2"
                        rows="5"
                        placeholder="Your message"
                        aria-describedby="contact-form-helper message-helper"
                      ></textarea>
                      <small id="message-helper" className="contact-field-helper-text">Share project details, timeline, and any key goals.</small>
                    </p>
                    <p>
                      <button type="submit" className="btn btn-primary mt-2" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send'}
                      </button>
                    </p>
                    {submitMessage && <p className="contact-submit-message mb-0">{submitMessage}</p>}
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn contact-modal-close mt-2" onClick={closeModal}>Close</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormModal;
