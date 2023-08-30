import React from "react";

const Hero = () => {
  return (
    <div id="wrapper" className="uk-text-white uk-dark">
      <div
        className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-soft-light"
        data-uk-height-viewport=""
      >
        <img
          className="uk-position-top-left uk-position-fixed uk-blur-large"
          style={{ left: "-4%", top: "-4%" }}
          width="500"
          src="images/gradient-circle.svg"
          alt="Circle"
        />
        <img
          className="uk-position-bottom-right uk-position-fixed uk-blur-large"
          style={{ right: "-4%", bottom: "-4%" }}
          width="500"
          src="images/gradient-circle.svg"
          alt="Circle"
        />
      </div>
      <div
        className="uk-position-top uk-position-z-index-negative uk-blend-hard-light"
        data-uk-height-viewport=""
      >
        <img
          className="uk-position-top uk-position-fixed uk-blur-large"
          style={{ left: "25%", top: "-80%" }}
          width="700"
          src="images/gradient-circle.svg"
          alt="Circle"
        />
      </div>
      <header
        id="header"
        className="uk-panel uk-overflow-hidden uk-position-z-index"
      >
        <div
          className="uk-position-top uk-position-z-index-negative uk-blend-hard-light"
          data-uk-height-viewport=""
        >
          <img
            className="uk-position-top uk-blur-large"
            style={{ left: "25%", top: "-80%" }}
            width="700"
            src="images/gradient-circle.svg"
            alt="Circle"
          />
        </div>
        <div className="uk-container">
          <div
            className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle"
            data-uk-height-viewport="offset-bottom: 30;"
          >
            <img
              className="uk-position-top-left uni-animation-spin uk-visible@m"
              width="40"
              src="images/objects/sparkle-light.png"
              alt="object"
              style={{ top: "45%", left: "30%" }}
            />
            <img
              className="uk-position-top-right uni-animation-spin uk-visible@m"
              width="40"
              src="images/objects/sparkle-light.png"
              alt="object"
              style={{ top: "35%", right: "30%" }}
            />
            <img
              className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m"
              width="24"
              src="images/objects/orange-ball-blur.png"
              alt="object"
              style={{ top: "16%", left: "24%" }}
              data-uk-svg=""
            />
            <img
              className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m"
              width="40"
              src="images/objects/violet-ball.png"
              alt="object"
              style={{ top: "34%", left: "16%" }}
              data-uk-svg=""
            />
            <img
              className="uk-position-bottom-left uni-animation-bounce uk-visible@m"
              width="24"
              src="images/objects/orange-ball.png"
              alt="object"
              style={{ bottom: "30%", left: "24%" }}
            />
            <img
              className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m"
              width="36"
              src="images/objects/violet-ball.png"
              alt="object"
              style={{ top: "16%", right: "24%" }}
              data-uk-svg=""
            />
            <img
              className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m"
              width="40"
              src="images/objects/orange-ball.png"
              alt="object"
              style={{ top: "34%", right: "16%" }}
              data-uk-svg=""
            />
            <img
              className="uk-position-bottom-right uni-animation-bounce uk-visible@m"
              width="24"
              src="images/objects/violet-ball-blur.png"
              alt="object"
              style={{ bottom: "30%", right: "24%" }}
            />
            <div className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index">
              <img
                className="uk-visible@m"
                width="150"
                src="images/nerko-icon.svg"
                alt="Nerko"
              />
              <img
                className="uk-hidden@m"
                width="80"
                src="images/nerko-icon.svg"
                alt="Nerko"
              />
              <img
                className="uk-margin-top uk-visible@m"
                width="240"
                src="images/nerko-dark.svg"
                alt="Nerko"
              />
              <img
                className="uk-margin-top uk-hidden@m"
                width="160"
                src="images/nerko-dark.svg"
                alt="Nerko"
              />
              <p className="uk-text-lead uk-margin-top uk-margin-medium-top@m">
                Blockchain-Backed <br />
                Brilliance
              </p>
              <a
                href="#uni_roadmap"
                className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top uk-margin-medium-top@m"
                data-uk-scroll
              >
                Roadmap
              </a>
            </div>
          </div>
        </div>
      </header>
      <img
        className="uk-width-2xsmall uk-flex-center uk-margin-auto"
        src="images/divider-01.svg"
        alt="Divider"
      />
    </div>
  );
};

export default Hero;
