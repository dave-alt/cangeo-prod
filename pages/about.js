import React from "react";
import Navbar from "../components/navbar";
import Skyline from "../components/skyline";
import Footer from "../components/footer";

function Whycangeo() {
  return (
    <>
      <h1>Why Choose CANGEO?</h1>
      <div className="pitch-cards-container">
        <div className="pitch-card">
          <h2>Reliable</h2>
          <p>
            Using agile methodology, always keeping you in the loop. Streamlined
            delivery, cost effective engagements, designed to match your goals,
            your timeline and your budget.
          </p>
        </div>
        <div className="pitch-card">
          <h2>Transparent</h2>
          <p>
            Transparent, Collaborative, Communicative: Complete project
            visibility and multiple open lines of communication from day one. We
            are available when you need us and continually updating you on your
            project’s status
          </p>
        </div>
        <div className="pitch-card">
          <h2>Expertise</h2>
          <p>
            Expert Web Designers & Developers We have been designing and
            developing websites and web applications since 2017. Our experts are
            trained, certified and experienced across a variety of website
            platforms.
          </p>
        </div>
      </div>
    </>
  );
}

function Project(props) {
  return (
    <div className="card-container2">
      <div className="assetContainer2">
        <img src={props.image} alt="" />
      </div>
      <div className="tsf2">{props.name}</div>
      <div className="proj-desc">{props.desc}</div>
    </div>
  );
}
function ProjectsContainer() {
  return (
    <>
      <h1 className="utility-h1">Our Works</h1>
      <div className="projects-container">
        <Project
          name="iBseize"
          image="./ibseize.png"
          desc={
            <>
              Beacon based Loyalty program called <b>iBseize</b> creates unique
              opportunities to Rate customer experience at the right moment at
              the right place.
              <br></br>
              <br></br>
              Using geofencing marketing, retail companies can encourage their
              customers to rate their experience when they leave the store,
              shopping mall, restaurant or supermarket, allowing retailers to
              increase campaign effectiveness.
            </>
          }
        />
        <Project
          name="Teckart E-commerce"
          image="./teckart.png"
          desc="Teckart is a retailer store that has a wide range of electronic goods ranging from Joysticks to play stations. With our team, they successfully gained exposure to the reach of many customers. Using SPA's helped reloading time."
        />
        <Project
          name="Freaky Tribes E-commerce"
          image="./freaky.png"
          desc="Freaky tribes is a urban psychedelic style clothing retailer that sells big brand name apparels. With modern color themes and product suggestions, it is a game changer in clothing store e-commerce."
        />
        <Project
          name="Motor Ranch E-commerce"
          image="./motor.png"
          desc="Motor Ranch is a motor-accessory store that ships its products all over India. The sales is being ramped up with its Social Media Presence teamed with SEO and SSR."
        />
        <Project
          name="Footwear E-commerce"
          image="./shoe.png"
          desc="Its an ongoing project that focuses on footwears. We are following user centric design for making it accessible."
        />
      </div>
    </>
  );
}

export default function about() {
  return (
    <>
      <Navbar />
      <div className="theAbout">
        <Whycangeo />
        <ProjectsContainer />
        <div className="team">
          <h1 className="utility-h1">Our Team</h1>
          <p>Geo Frantine - Digital Marketing</p>
          <p>Gogan - Django Developer</p>
          <p>Donopha Cletus - Fullstack Developer</p>
          <p>Sam - UX/UI Designer</p>
        </div>
        <div className="Locate Cangeo">
        <h1 className="utility-h1">Locate CANGEO</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.565726366069!2d-75.74542258444609!3d45.357577979099844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06e4bf8d8e4f%3A0x48ba3a7564291890!2s47%20Starwood%20Rd%2C%20Nepean%2C%20ON%20K2G%201Y9%2C%20Canada!5e0!3m2!1sen!2sin!4v1648678085828!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
     
      <Footer />
    </>
  );
}
