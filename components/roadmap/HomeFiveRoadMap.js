import Link from "next/link";

const HomeFiveRoadMap = () => {
  return (
    <div
      id="uni_about"
      className="uni-roadmap uk-section uk-section-large@m uk-panel uk-overflow-hidden"
    >
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
          data-uk-grid
        >
          <div className="uk-panel">
            <h2 className="uk-h3 uk-h2@s uk-heading-d4@m uk-text-uppercase">
              What Do We Do
            </h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <div
            className="uk-grid uk-grid-row-medium uk-flex-middle h-full overflow-hidden"
            data-uk-grid
          >
            <div className="uk-width-4-12@m h-full overflow-y-auto">
              <ul
                className="uni-roadmap-switcher"
                data-uk-switcher="connect: #uni-roadmap-nav; animation: uk-animation-slide-bottom-small, uk-animation-slide-top-small"
              >
                <li>
                  <Link href="#">
                    <h2 className="uk-h4 uk-h3@m uk-text-inherit uk-text-uppercase uk-margin-remove">
                      About Our Project
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <h2 className="uk-h4 uk-h3@m uk-text-inherit uk-text-uppercase uk-margin-remove">
                      Proof of Collab
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <h2 className="uk-h4 uk-h3@m uk-text-inherit uk-text-uppercase uk-margin-remove">
                      Boosting
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <h2 className="uk-h4 uk-h3@m uk-text-inherit uk-text-uppercase uk-margin-remove">
                      Who Will Benefit?
                    </h2>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="uk-width-expand@m">
              <div className="uk-panel">
                <ul id="uni-roadmap-nav" className="uk-switcher">
                  <li>
                    <div
                      className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                      data-uk-grid=""
                    >
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Purpose
                            </h3>
                            <p className="uk-text-large@m">
                              A developer-centric forum poised to revolutionize
                              problem-solving in the coding world. Canister
                              Threads is made for all developers to solidify
                              their collaboration and knowledge-sharing on the
                              blockchain.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Decentralized Collaboration
                              </li>

                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Proof of Knowledge
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Collaboration
                            </h3>
                            <p className="uk-text-large@m">
                              With an emphasis on collaborative
                              knowledge-sharing, users can initiate threads
                              highlighting their code-related issues, inviting a
                              community of like-minded developers to contribute
                              their insights.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Grow DEV Community
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Proof of Collaboration
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                      data-uk-grid=""
                    >
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Ecosystem
                            </h3>
                            <p className="uk-text-large@m">
                              The overarching goal of our project is to
                              establish a vibrant and collaborative ecosystem
                              that empowers developers to solve coding issues
                              efficiently while fostering knowledge exchange.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Grow community
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Tokenization
                            </h3>
                            <p className="uk-text-large@m">
                              Our unique approach involves the utilization of
                              non-transferable skill tokens respective to the
                              skill level of the user. These tokens are earned
                              by contributing to the community.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Incentive Mechanism
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                      data-uk-grid=""
                    >
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Visibility
                            </h3>
                            <p className="uk-text-large@m">
                              Our boosting mechanism enhances the visibility of
                              threads seeking solutions. Developers have the
                              option to allocate ICP tokens to any threads,
                              making them stand out and encouraging faster
                              responses.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                ICP Token
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Reward
                            </h3>
                            <p className="uk-text-large@m">
                              These ICP tokens, once invested, circulate back
                              into the ecosystem by being distributed among
                              responders who provided accurate solutions to the
                              thread. This incentivizes users to contribute
                              their knowledge.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Reward Mechanism
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                      data-uk-grid=""
                    >
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Chain Growth
                            </h3>
                            <p className="uk-text-large@m">
                              Our project drives Internet Computer adoption by
                              incentivizing developers with tokens. This spurs
                              interest, leading to more development and user
                              appeal, creating a self-reinforcing cycle of
                              growth.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Ecosystem Expansion
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Self-reinforcing Loop
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              User Benefits
                            </h3>
                            <p className="uk-text-large@m">
                              Through the issuance of non-transferable skill
                              tokens and boosted rewards, we aim to recognize
                              and reward developers who contribute accurate and
                              valuable solutions to coding challenges.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Incentivized Contributions
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Valuable Solutions
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s"
                      data-uk-grid=""
                    >
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <span className="uk-text-small uk-flex-center uk-flex-column uk-flex-middle uk-background-gradient uk-radius-xsmall uk-text-gray-10 uk-width-2xsmall">
                              Phase 9
                            </span>
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Project
                            </h3>
                            <p className="uk-text-large@m">
                              Quality comes first. we took our time to plan out
                              everything and build our production pipeline for a
                              good quality artworks.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Release website and logo
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Grow community
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Launch the project
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-small uk-card-medium@m uk-panel uk-radius uk-radius-large@m uk-border uk-box-shadow-xsmall dark:uk-background-white-5">
                          <div className="uk-panel">
                            <span className="uk-text-small uk-flex-center uk-flex-column uk-flex-middle uk-background-gradient uk-radius-xsmall uk-text-gray-10 uk-width-2xsmall">
                              Phase 10
                            </span>
                            <h3 className="uk-h4 uk-h3@m uk-text-uppercase">
                              Security
                            </h3>
                            <p className="uk-text-large@m">
                              Starting the production on the procedurally
                              generated planets and the smart contract for
                              minting.
                            </p>
                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                            <ul className="uk-list uk-text-small uk-text-medium@m">
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Release website and logo
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Grow community
                              </li>
                              <li className="uk-flex-middle">
                                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                                Launch the project
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeFiveRoadMap;
