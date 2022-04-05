import React from "react";

const iBseize_list = [
  "Geofencing Marketing",
  "Location based service",
  "iBeacon based Product",
  "Customer Rating",
  "Inproving Campaigns",
  "Retailer-customer hub",
];
const ui_list = [
  " Prototyping",
  "wireframing",
  "user flows",
  "mockups",
  "Visual design and design software",
  "User research and usability testing",
  "Agile",
  "Information architecture",
  "Application development",
];
const digitalmarketing_list = [
  "Search Engine Optimization (SEO)",
  "Search Engine Marketing (SEM)",
  "Website Strategy",
  "Social Media Marketing",
  "Email Outreach",
  "Re-targeting",
  "Content Generation and Optimization",
  "Quality Link Building",
  "Affiliate Marketing",
  "Integrated Online Marketing Strategies",
];
const videography_list = [
  "Photography",
  "Editing",
  "Creative skills",
  "Proficiency with softwares",
  "Captions, Graphics",
  "Animation",
  "3D rendering",
];
const webdevelopment_list = [
  "HTML/CSS",
  "Analytical",
  "Responsive design",
  "JavaScript",
  "Testing and debugging",
  "Deployment",
  "Back-end",
  "Search engine optimization",
];
const medicalcoding_list = [
  "Audit and submit claims",
  "Obtain insurance referrals",
  "Verify insurance eligibility and benefits",
  "Understand insurance guidelines",
  "Review patient bills",
  "Check payments",
  "Research and appeal",
  "Set up payment plans",
  "Medical terminology",
  "Accounting and bookkeeping",
  "Excellent communication",
  "Attention to detail",
];
const dataentry_list = [
  "Attention to detail",
  "Effective Multitasking",
  "Verbal and written comm.",
  "Spreadsheets",
  "Databases",
  "Sorting Documents",
  "Transcribing",
  "Word Processing",
  "Resolving Discrepancies",
];

function Servicecard(props) {
  return (
    <div className={props.class}>
      <div className="service-card-wrapper">
        <h2 className="service-card-heading">{props.title}</h2>
        <div className={props.zag ? "bigFlex zag" : "bigFlex"}>
          <div className="service-card-image-container">
            {props.video ? (
              <video muted autoPlay={"autoplay"} loop src={props.video} />
            ) : (
              <img className="image-for" src={props.image} />
            )}
          </div>
          <div className="flex-container">
            <p className="service-card-description">{props.description}</p>
            <h3>Our Skills</h3>
            <ul className="service-card-list">
              {props.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {props.app&&<div className="app">
            <h3>Download our App for iOS and Android</h3>
            <div className="badges"><a target="_blank" href='https://play.google.com/store/apps/details?id=beacon.dubai.bytesflow.ibseize&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' className="badge" src='./google.png'/></a>
            <a target="_blank" href='https://apps.apple.com/us/app/id1469004837'><img className="badge" alt='Get it on App Store' src='./apple.png'/></a></div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="services-container">
      <Servicecard
      app={true}
        zag={true}
        class="ib"
        list={iBseize_list}
        title="iBseize"
        description="Beacon based Loyalty program called iBseize creates unique opportunities to Rate customer experience at the right moment at the right place.Using geofencing marketing, retail companies can encourage their customers to rate their experience when they leave the store, shopping mall, restaurant or supermarket, allowing retailers to increase campaign effectiveness."
        image="ib.png"
      />
      <Servicecard
        class="dm"
        list={digitalmarketing_list}
        title="Digital Marketing"
        description="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel."
        video="dm.mp4"
      />
      <Servicecard
        zag={true}
        class="ui"
        list={ui_list}
        title="UI/UX Design"
        description="User interface (UI) design refers to the aesthetic elements by which people interact with a product, such as buttons, icons, menu bars, typography, colors, and more. User experience (UX) design refers to the experience a user has when interacting with a product."
        video="ui.mp4"
      />
      <Servicecard
        class="vg"
        list={videography_list}
        title="Videography"
        description="Videography refers to the process of capturing moving images on electronic media (e.g., videotape, direct to disk recording, or solid state storage) and even streaming media. The term includes methods of video production and post-production."
        video="vg.mp4"
      />
      <Servicecard
        zag={true}
        class="wd"
        list={webdevelopment_list}
        title="Web Development"
        description="We are proficient in terms of building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management."
        video="wd.mp4"
      />
      <Servicecard
        class="mc"
        list={medicalcoding_list}
        title="Medical Coding/Billing"
        description="Medical billing and medical coding are two interrelated jobs that help facilitate payment between health care providers, insurance companies, and patients."
        video="mc.mp4"
      />
      <Servicecard
        zag={true}
        class="de"
        list={dataentry_list}
        title="Data Entry"
        description="We have a dedicated team for a often-tedious data-entry works. Data entry is the process of transcribing information into an electronic medium."
        video="de.mp4"
      />
    </div>
  );
}
