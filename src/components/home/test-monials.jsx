import React, { useEffect } from 'react';

const Testimonials = () => {
  
  useEffect(() => {
    const interval = setInterval(() => {
      const slickArrow = document.querySelector('.slick-next.slick-arrow');
      if (slickArrow) {
        slickArrow.click();
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);


  return (
    <div className="section gray padding-top-65 padding-bottom-55">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {/* Section Headline */}
            <div className="section-headline centered margin-top-0 margin-bottom-5">
              <h3>Testimonials</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="fullwidth-carousel-container margin-top-20">
        <div className="testimonial-carousel testimonials">

          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src="assets/images/user-avatar-small-02.jpg" alt=""/>
              </div>
              <div className="testimonial-author">
                <h4>Sindy Forest</h4>
                <span>Freelancer</span>
              </div>
              <div className="testimonial">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
            </div>
          </div>

          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src="assets/images/user-avatar-small-01.jpg" alt=""/>
              </div>
              <div className="testimonial-author">
                <h4>Tom Smith</h4>
                <span>Freelancer</span>
              </div>
              <div className="testimonial">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art.</div>
            </div>
          </div>

          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src="assets/images/user-avatar-placeholder.png" alt=""/>
              </div>
              <div className="testimonial-author">
                <h4>Sebastiano Piccio</h4>
                <span>Employer</span>
              </div>
              <div className="testimonial">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art.</div>
            </div>
          </div>

          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src="assets/images/user-avatar-small-03.jpg" alt=""/>
              </div>
              <div className="testimonial-author">
                <h4>David Peterson</h4>
                <span>Freelancer</span>
              </div>
              <div className="testimonial">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable sources.</div>
            </div>
          </div>

          {/* Item */}
          <div className="fw-carousel-review">
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src="assets/images/user-avatar-placeholder.png" alt=""/>
              </div>
              <div className="testimonial-author">
                <h4>Marcin Kowalski</h4>
                <span>Freelancer</span>
              </div>
              <div className="testimonial">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</div>
            </div>
          </div>

        </div>
      </div>
      {/* Categories Carousel / End */}
    </div>
  );
}

export default Testimonials;
