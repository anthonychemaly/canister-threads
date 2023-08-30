const HomeThreeMinting = () => {
  return (
    <div
      id="uni_minting"
      className="uni-minting uk-section uk-section-xlarge@m uk-panel"
    >
      <div className="uk-container">
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
            className="uk-grid-medium uk-grid-2xlarge@m uk-flex-middle uk-grid"
            data-uk-grid=""
          >
            <div className="uk-panel uk-width-2-5@m">
              <header className="uk-panel uk-text-center uk-text-left@m">
                <h2 className="uk-h3 uk-h1@m uk-text-uppercase">
                  Thread & <br />
                  <span className="uk-text-gradient">Spread!</span>
                </h2>
                <img
                  className="uk-width-2xsmall uk-margin@m uk-visible@m"
                  src="images/divider-01.svg"
                  alt="Divider"
                />
                <p className="uk-text-xlarge@m">Get Engaged!</p>
              </header>
            </div>
            <div className="uk-panel uk-width-expand@m">
              <div
                className="uk-grid-small uk-grid@m uk-child-width-1-2@m uk-width-2xlarge uk-grid"
                data-uk-grid="masonry: true;"
                data-anime="targets: > * > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
              >
                <div>
                  <div className="uni-minting-item uk-card uk-card-medium uk-card-border uk-card-default uk-height-large@m uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                    <div
                      className="uk-grid uk-grid-small@m uk-flex-column uk-flex-top"
                      data-uk-grid
                    >
                      <div className="uk-width-auto">
                        <div className="uk-card uk-card-xsmall uk-background-gradient uk-flex-middle uk-flex-center uk-radius-medium">
                          <i className="uk-icon-small uk-icon-medium@m uk-text-white unicon-wallet"></i>
                        </div>
                      </div>
                      <div className="uk-width-expand@m">
                        <div className="content uk-panel">
                          <h3 className="title uk-h5 uk-text-uppercase uk-margin-remove">
                            Connect wallet
                          </h3>
                          <p className="description uk-text-muted dark:uk-text-gray-40">
                            Connect with the app using any ICP wallet of your
                            choice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uni-minting-item uk-card uk-card-medium uk-card-border uk-card-default uk-height-large@m uk-radius-medium uk-radius-large@m uk-margin-large-top@m dark:uk-background-white-5">
                    <div
                      className="uk-grid uk-grid-small@m uk-flex-column uk-flex-top"
                      data-uk-grid
                    >
                      <div className="uk-width-auto">
                        <div className="uk-card uk-card-xsmall uk-background-gradient uk-flex-middle uk-flex-center uk-radius-medium">
                          <i className="uk-icon-small uk-icon-medium@m uk-text-white unicon-receipt"></i>
                        </div>
                      </div>
                      <div className="uk-width-expand@m">
                        <div className="content uk-panel">
                          <h3 className="title uk-h5 uk-text-uppercase uk-margin-remove">
                            Issue a Thread!
                          </h3>
                          <p className="description uk-text-muted dark:uk-text-gray-40">
                            Fire away with your issue thread and let's unravel
                            the solution together!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uni-minting-item uk-card uk-card-medium uk-card-border uk-card-default uk-height-large@m uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                    <div
                      className="uk-grid uk-grid-small@m uk-flex-column uk-flex-top"
                      data-uk-grid
                    >
                      <div className="uk-width-auto">
                        <div className="uk-card uk-card-xsmall uk-background-gradient uk-flex-middle uk-flex-center uk-radius-medium">
                          <i className="uk-icon-small uk-icon-medium@m uk-text-white unicon-text-annotation-toggle"></i>
                        </div>
                      </div>
                      <div className="uk-width-expand@m">
                        <div className="content uk-panel">
                          <h3 className="title uk-h5 uk-text-uppercase uk-margin-remove">
                            Contribute
                          </h3>
                          <p className="description uk-text-muted dark:uk-text-gray-40">
                            Dive into the conversation! Help untangle the
                            threads by contributing to others' discussions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uni-minting-item uk-card uk-card-medium uk-card-border uk-card-default uk-height-large@m uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                    <div
                      className="uk-grid uk-grid-small@m uk-flex-column uk-flex-top"
                      data-uk-grid
                    >
                      <div className="uk-width-auto">
                        <div className="uk-card uk-card-xsmall uk-background-gradient uk-flex-middle uk-flex-center uk-radius-medium">
                          <i className="uk-icon-small uk-icon-medium@m uk-text-white unicon-piggy-bank"></i>
                        </div>
                      </div>
                      <div className="uk-width-expand@m">
                        <div className="content uk-panel">
                          <h3 className="title uk-h5 uk-text-uppercase uk-margin-remove">
                            Collect Rewards
                          </h3>
                          <p className="description uk-text-muted dark:uk-text-gray-40">
                            Answer boosted threads and earn rewards for your
                            skill and contribution!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeThreeMinting;
