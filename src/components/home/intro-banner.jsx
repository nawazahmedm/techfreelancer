import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../../assets/images/home-background.jpg';
import backgroundImage2 from '../../assets/images/home-background-02.jpg';
import backgroundImage3 from '../../assets/images/home-video-background-poster.jpg';

const IntroBanner = ({ navigateToContacts }) => {

  const [backgroundImages, setBackgroundImages] = useState([
    backgroundImage1,
    backgroundImage2,
    backgroundImage3
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to rotate the background images
    const rotateBackgroundImages = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    // Schedule the rotation every 5 seconds
    const rotationInterval = setInterval(rotateBackgroundImages, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(rotationInterval);
  }, [backgroundImages.length]);

  return (
    <div className="intro-banner" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
      <div className="container">
        {/* Intro Headline */}
        <div className="row">
          <div className="col-md-12">
            <div className="banner-headline">
              <h3>
                <strong>Hire experts or be hired for any job, any time.</strong>
                <br />
                <span>Thousands of small businesses use <strong className="color">TechFreeLancer</strong> to turn their ideas into reality.</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row">
          <div className="col-md-12">
            <div className="intro-banner-search-form margin-top-95">
              {/* Search Field */}
              <div className="intro-search-field with-autocomplete">
                <label htmlFor="autocomplete-input" className="field-title ripple-effect">What Job you want? to What service you want?</label>
                <div className="input-with-icon">
                  <input id="autocomplete-input" type="text" placeholder="Online Job" />
                  <i className="icon-material-outline-location-on"></i>
                </div>
              </div>

              {/* Button */}
              <div className="intro-search-button">
                <button className="button ripple-effect" onClick={navigateToContacts}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row">
          <div className="col-md-12">
            <ul className="intro-stats margin-top-45 hide-under-992px">
              <li>
                <strong className="counter">1,586</strong>
                <span>Tasks Posted</span>
              </li>
              <li>
                <strong className="counter">3,543</strong>
                <span>Clients</span>
              </li>
              <li>
                <strong className="counter">1,232</strong>
                <span>Bidders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
