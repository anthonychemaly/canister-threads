import RoadmapCard from "./RoadmapCard";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Project Initiation and Design Kickoff",
    description:
      "Kickstarting the project by assigning roles, defining scope, and setting up communication. Identifying key features, initiating UI/UX research, configuring backend, and establishing initial API endpoints for threads.",
    progress: 0,
    deliverables: [
      "Defined project scope",
      "Established development foundation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Development and Testing",
    progress: 50,
    description:
      "Moving to core development. Refining design system, implementing UI/UX on frontend, developing navigation and authentication screens. Thread creation, backend testing, and chain-end work initiation.",
    deliverables: ["Functional UI", "Backend functionality for threads"],
  },
  {
    phase: "Phase 3",
    title: "Completion and Refinement",
    description:
      "Refining frontend, finalizing reward mechanism, implementing responsive design. User testing with team and limited external users, addressing bugs. Resulting in  completed BETA and reward mechanism.",
    progress: 80,
    deliverables: [
      "Implemented reward mechanism",
      "Completed BETA version with testing",
    ],
  },
  {
    phase: "Launch",
    title: "Iterative Improvements",
    description:
      "Collecting user feedback after launch, addressing bugs for smooth experience. Enhancing platform based on user suggestions, ensuring continuous improvements for better functionality and user satisfaction.",
    progress: 100,
    deliverables: [
      "Continuous enhancements",
      "Improved platform functionality and user experience",
    ],
  },
];

const HomeOneRoadMap = () => (
  <div
    id="uni_roadmap"
    className="uni-roadmap uk-section uk-section-large@m uk-padding-3xlarge-bottom@m uk-panel uk-overflow-hidden swiper-parent"
  >
    <div className="uk-container">
      <header
        className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
        data-uk-grid
        data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
      >
        <div className="uk-panel">
          <h2 className="uk-h3 uk-h2@m">Our Roadmap</h2>
        </div>
      </header>
      <div
        className="uk-panel uk-width-medium uk-margin-auto uk-margin-medium-top uk-margin-2xlarge-top@m"
        data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
      >
        <div
          className="swiper swiper-match uk-overflow-unset"
          data-swiper="gap: 16; dots-type: progressbar;"
          data-swiper-m="gap: 32;"
        >
          <div className="swiper-wrapper uk-grid-match uk-flex-middle">
            {roadmapData.map((roadmapItem, index) => (
              <RoadmapCard key={index} {...roadmapItem} />
            ))}
          </div>
          <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal swiper-dotnav"></div>
        </div>
        <a
          aria-label="Next"
          href="#next"
          className="swiper-next uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-right uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"
        >
          <i className="uk-icon-small" data-feather="chevron-right"></i>
        </a>
        <a
          aria-label="Prev"
          href="#prev"
          className="swiper-prev uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-left uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"
        >
          <i className="uk-icon-small" data-feather="chevron-left"></i>
        </a>
      </div>
    </div>
  </div>
);

export default HomeOneRoadMap;
