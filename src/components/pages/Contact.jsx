import { useState } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/index.css";

function ContactFormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email using the form data
    window.location.href = `mailto:${formData.email}?subject=Portfolio Inquiry&body=${formData.message}`;
    setModalIsOpen(false); 
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-12 col-md-6">
          <div className="h1 mb-3 pb-3 pt-5 text-center">
            Get in touch
          </div>
          <div className="intro card mt-5 mb-5 shadow-lg p-3 rounded fw-semibold bg-light text-center">
          What&apos;s holding you back? Send me a message!
            <div className="d-flex justify-content-center align-items-center h-100 mt-3">
              <button className="btn btn-primary" onClick={() => setModalIsOpen(true)}>Open Contact Form</button>
              <div className="row ">
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  contentLabel="Contact Form Modal"
                  className="custom-modal shadow w-50 p-3 rounded" tabindex="-1" 
                  overlayClassName="custom-overlay overlay" 
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-6"></div>
                        <form className="p-3 rounded bg-light shadow w-100" onSubmit={handleSubmit}>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Your email" required />
                          <textarea name="message" value={formData.message} onChange={handleChange} className="form-control mt-2" placeholder="Your message" required />
                          <button type="submit" className="btn btn-primary mt-2">Send Email</button>
                        </form>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary mt-2" onClick={() => setModalIsOpen(false)}>Close</button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

      export default ContactFormModal;
