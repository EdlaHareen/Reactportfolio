import React, { Component } from 'react';
import 'flexslider';
import './style.css'

export default class Testimonials extends Component {
  componentDidMount() {
    // Initialize FlexSlider after component mounts
    this.initFlexSlider();
  }

  initFlexSlider = () => {
    // Initialize FlexSlider with options
    // You may need to adjust these options based on your requirements
    window.$('.flexslider').flexslider({
      animation: 'slide',
      controlNav: false, // Hide navigation dots
      directionNav: true, // Show navigation arrows
      prevText: '<', // Custom text or HTML for the "previous" control
      nextText: '>',
    });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item, index) => {
                      return (
                        <li key={index}>
                          <blockquote>
                            <p>{item.description}</p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>
              {/* div.flexslider ends */}
            </div>
            {/* div.flex-container ends */}
          </div>
          {/* row ends */}
        </div>
        {/* text-container ends */}
      </section>
    );
  }
}
