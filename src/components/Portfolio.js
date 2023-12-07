import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Porfolio extends Component {
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
    const { modalIsOpen, selectedProject } = this.state;
    let resumeData = this.props.resumeData;
  
    return (
      <section id="portfolio">
        <div className="row">
          <div className="sixteen columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div key={index} className="columns portfolio-item">
                      <div className="">
                        <a onClick={() => this.openModal(item)}>
                          <img src={`${item.imgurl}`} className="item-img" alt={item.name}  style={{cursor:"pointer"}}/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5 style={{color:"orangered"}}>{item.name}</h5>
                              <p style={{color:"black"}}>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
  
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Project Modal"
        >
          {selectedProject && (
            <div>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.tech}</p>
              <p>{selectedProject.content}</p>
              {/* Add other details as needed */}
              <button onClick={this.closeModal}>Close Modal</button>
            </div>
          )}
        </ReactModal>
      </section>
    );
  }
  
}