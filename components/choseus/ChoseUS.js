const ChoseUs = () => {
  return (
    <>
      <div
        id="uni_whyus"
        className="uni-whyus uk-section uk-section-xlarge@m uk-panel"
      >
        <div className="uk-container">
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
            data-uk-grid
          >
            <div className="uk-panel uk-text-center">
              <h2 className="uk-h3 uk-h1@m">Why choose us?</h2>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
            <img
              className="uk-position-top-left uk-text-secondary"
              width="16"
              src="images/objects/circle-01.png"
              alt="Object"
              style={{ top: "-16%", left: "8%" }}
            />
            <img
              className="uk-position-bottom-right uk-text-primary"
              width="24"
              src="images/objects/circle-02.png"
              alt="Object"
              style={{ bottom: "16%", right: "-8%" }}
            />
            <img
              className="uk-position-bottom-left uk-text-muted"
              width="28"
              src="images/objects/x.png"
              alt="Object"
              style={{ bottom: "16%", left: "-8%" }}
            />
            <div
              className="uk-grid uk-child-width-1-4@s"
              data-uk-grid="masonry: true;"
            >
              <div>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="uk-h3 uk-h2@m uk-text-gradient">01.</span>
                  <div className="uk-panel uk-margin-top">
                    <h3 className="uk-h5 uk-h4@m">
                      Protocol
                      <br /> Empowerment
                    </h3>
                    <p className="uk-text-muted">
                      Empowering ICP developers with easy onboarding, tight-knit
                      communities, and innovation, supercharging the ICP world
                      for an epic developer journey. You're in for a wild ride!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                  <span className="uk-h3 uk-h2@m uk-text-gradient">02.</span>
                  <div className="uk-panel uk-margin-top">
                    <h3 className="uk-h5 uk-h4@m">DevBoost</h3>
                    <p className="uk-text-muted">
                      Fueling Internet Computer adoption through developer
                      incentives. Rewards drive engagement, expanding the
                      ecosystem. Developers attract users, catalyzing growth and
                      accelerating adoption.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="uk-h3 uk-h2@m uk-text-gradient">03.</span>
                  <div className="uk-panel uk-margin-top">
                    <h3 className="uk-h5 uk-h4@m">
                      Streamline <br />
                      Hub
                    </h3>
                    <p className="uk-text-muted">
                      A chill way into the Internet Computer for developers! Easy
                      access, more fun, and clear info to vibe with the global
                      developer crew. Your go-to entrance to the Internet
                      Computer as a developer!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                  <span className="uk-h3 uk-h2@m uk-text-gradient">04.</span>
                  <div className="uk-panel uk-margin-top">
                    <h3 className="uk-h5 uk-h4@m">
                      Big <br />
                      community
                    </h3>
                    <p className="uk-text-muted">
                      Website, blogs, newsletters, community engagement:
                      Informative posts, updates on benefits. Newsletters for
                      milestones. Online interaction fosters collaboration,
                      visibility, and connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoseUs;
