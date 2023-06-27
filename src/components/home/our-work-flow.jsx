import React from 'react';

const OurWorkFlow = () => {
  return (
    <div className="section padding-top-65 padding-bottom-65">
      <div className="container">
        <div className="row">

          <div className="col-xl-12">
            {/* Section Headline */}
            <div className="section-headline centered margin-top-0 margin-bottom-5">
              <h3>Our Work Flow</h3>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            {/* Icon Box */}
            <div className="icon-box with-line">
              {/* Icon */}
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className="icon-line-awesome-lock"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <h3>Join us</h3>
              <p>Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            {/* Icon Box */}
            <div className="icon-box with-line">
              {/* Icon */}
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className="icon-line-awesome-legal"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <h3>Post Requirement</h3>
              <p>Efficiently unleash cross-media information without. Quickly maximize return on investment.</p>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            {/* Icon Box */}
            <div className="icon-box">
              {/* Icon */}
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className=" icon-line-awesome-trophy"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <h3>Choose a Professional</h3>
              <p>Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurWorkFlow;
