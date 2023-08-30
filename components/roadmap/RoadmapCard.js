import React from "react";

const RoadmapCard = ({ phase, progress, title, description, deliverables }) => (
  <div className="swiper-slide">
    <div>
      <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient">
          <span>{progress}%</span>
        </span>
        <div className="uk-panel">
          <span className="uni-phase-count uk-text-overline uk-text-gradient">
            {phase}
          </span>
          <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">
            {title}
          </h3>
          <p className="uni-phase-description uk-text-large@m">{description}</p>
          <hr className="uk-width-2xsmall uk-margin-medium@m" />
          <ul className="uk-list uk-text-small uk-text-medium@m">
            {deliverables.map((deliverable, index) => (
              <li className="uk-flex-middle" key={index}>
                <i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i>{" "}
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default RoadmapCard;
