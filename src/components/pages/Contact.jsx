import { useState } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactFormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh', paddingBottom: '10vh' }}>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12">
          <div className="h1 text-center" style= {{ fontFamily: 'Brush Script MT, cursive', fontSize: '4rem', fontWeight: 'bold', paddingBottom: '20px'}}>
            Get in touch
          </div>
          <div className="intro-modal-card shadow rounded fw-bold bg-light text-center my-5 py-3 px-5" style={{ marginTop: '40px' }}>
            What&apos;s holding you back? Send me a message!
            <div className="d-flex justify-content-center align-items-center py-3">
              <button className="btn btn-primary col-sm-12 col-lg-6 mt-3" onClick={() => setModalIsOpen(true)}>Open Contact Form</button>
              <div className="row ">
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  contentLabel="Contact Form Modal"
                  className="custom-modal shadow container-fluid col-sm-12 col-lg-6 rounded" tabindex="-1"
                  overlayClassName="custom-overlay overlay"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <form className="p-3 rounded bg-light shadow w-100" name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                          <label htmlFor="email">Email </label>
                          <input type="email" name="email" id="email" required className="form-control" placeholder="Your email" />
                        </p>
                        <p>
                          <label htmlFor="message">Message </label>
                          <textarea name="message" id="message" required className="form-control mt-2" rows="5" placeholder="Your message"></textarea>
                        </p>
                        <p>
                          <button type="submit" className="btn btn-primary mt-2">Send</button>
                        </p>
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
