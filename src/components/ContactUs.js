import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class ContactUs extends Component {

  state = {
    modalIsOpen: false,
    selectedProject: null,
  };
  openModal = (project) => {
    this.setState({
      modalIsOpen: true,
      selectedProject: project,
    });
  };
  
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedProject: null,
    });
  };
  
  render() {
    const { modalIsOpen} = this.state;

    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                  <a onClick={() => this.openModal()}> hedla@gmail.com</a>
                </h4>
              </div>
            </aside>
          </div>
          <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Project Modal"
        >
        
            <div>
            <div className="dorik-row-lz6xnjth flex popup-row">
      <div className="col-lg-1/1">
        <div className="column-inner dorik-column-4nny02t8 1/1">
        <button style={{fontSize:"10px", width:"10%"}} onClick={this.closeModal}>Close Modal</button>

          <form
            id="o9rzg21r fs-frm"
            name="simple-contact-form"
            method="POST"
            action="https://formspree.io/f/mdorvjjl"
          >
            <div className="dorik-customForm-o9rzg21r">
              <div className="customform-field-wrapper customform-field-email customform-column-6">
                <label className="form-field-label" htmlFor="email-address">
                  Email<span className="required-mark">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  name="_replyto"
                  required=""
                  id="email-address"
                  className="form-field-input"
                />
              </div>
              <div className="customform-field-wrapper customform-field-email customform-column-6">
                <label className="form-field-label" htmlFor="full-name">
                  Name<span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required=""
                  id="full-name"
                  className="form-field-input"
                />
              </div>

              <div className="customform-field-wrapper customform-field-textarea customform-column-6">
                <label className="form-field-label" htmlFor="message">
                  Message<span className="required-mark">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  required=""
                  id="message"
                  className="form-field-input textarea"
                ></textarea>
              </div>
              {/* Additional form fields can be added here */}

              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              <div className="customform-field-wrapper">
                <button type="submit" className="customform-button" value="submit" id="">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="rocket"
                    className="svg-inline--fa fa-rocket icon customform-icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
  <path fill="currentColor" d="M142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"></path>
                  </svg>
                  <span className="icon-text-spacer"></span>
                  Submit Form
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="spinner"
                    className="svg-inline--fa fa-spinner fa-spin fa-fw customform-icon spinner"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ display: 'none', marginLeft: '5px' }}
                  >
  <path fill="currentColor" d="M142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"></path>
                  </svg>
                </button>
              </div>
              <input type="hidden" name="_t" value="Y29udGFjdEBzaG91cmF2LmRlc2lnbg==" />
              <input type="hidden" name="_sub" value="Custom Form from Dorik" />
            </div>
          </form>
        </div>
      </div>
    </div>              {/* Add other details as needed */}
            </div>
          
        </ReactModal>
        </section>

        
        
        );
  }
}