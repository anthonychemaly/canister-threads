import Link from "next/link";

const FaqOne = () => {
  const faq = [
    {
      question: "What is Canister Threads?",
      answer:
        "Canister Threads is a developer-centric platform designed to facilitate collaborative problem-solving. It offers a space where developers can create threads about coding issues and receive solutions from the community. The platform integrates blockchain technology to validate correct solutions and rewards contributors with non-transferable skill tokens and ICP tokens.",
    },
    {
      question: "How does Canister Threads work?",
      answer:
        "Users can create threads outlining coding issues they're facing. Community members can then reply with solutions. Correct solutions are validated through blockchain integration, earning contributors skill tokens specific to the domain. Threads can also be boosted using ICP tokens to increase visibility and reward responders.",
    },
    {
      question: "What are non-transferable skill tokens?",
      answer:
        "Non-transferable skill tokens are digital tokens earned by community members who provide accurate solutions. These tokens recognize a contributor's expertise in a specific domain, reinforcing their skills and achievements within the developer community.",
    },
    {
      question: "What are the benefits of using Canister Threads?",
      answer:
        "Canister Threads offers a collaborative environment for developers to seek and provide solutions, fostering knowledge-sharing and skill recognition. The platform's integration of blockchain technology adds transparency and trust, while incentives like skill tokens and ICP rewards enhance engagement.",
    },
    {
      question: "How can I earn ICP tokens on Canister Threads?",
      answer:
        "Contributors who provide correct solutions to threads and earn skill tokens can also receive ICP tokens as rewards for their valuable insights. Additionally, thread issuers can boost their threads using ICP tokens, which are then distributed to responders with accurate solutions.",
    },
    {
      question: "Is Canister Threads open to all developers?",
      answer:
        "Yes, Canister Threads is open to developers worldwide. Anyone can join the platform to seek solutions to coding challenges, contribute their expertise, and earn rewards for their valuable insights.",
    },
    {
      question:
        "How will Canister Threads make the Internet Computer accessible?",
      answer:
        "Canister Threads simplifies engagement with the Internet Computer ecosystem by offering an intuitive platform. It encourages developers to interact with canisters, fostering familiarity and making the Internet Computer more approachable.",
    },
    {
      question: "Can I boost threads if I am not the initial author?",
      answer:
        "Yes, anyone interested in boosting a thread can do so by contributing ICP tokens. Boosting a thread increases its visibility and rewards responders with ICP tokens.",
    },
    {
      question: "Can I join Canister Threads as a non-developer?",
      answer:
        "While Canister Threads is primarily aimed at developers, anyone interested in coding, problem-solving, or engaging with the developer community is welcome to participate, seek solutions, and learn from the discussions.",
    },
  ];

  return (
    <>
      <div
        id="uni_faq"
        className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m"
      >
        <div className="uk-container">
          <header
            className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid"
            data-uk-grid
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
          >
            <div className="uk-panel">
              <h2 className="uk-h3 uk-h1@m">FAQ</h2>
            </div>
          </header>
          <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
            <ul
              className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5"
              data-uk-accordion="collapsible: false"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              {faq?.map((item, index) => (
                <li key={index}>
                  <Link className="uk-accordion-title uk-h5@m" href="#">
                    {item.question}
                  </Link>
                  <div className="uk-accordion-content uk-padding-small-bottom">
                    <p className="uk-text-small uk-text-large@m uk-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqOne;
