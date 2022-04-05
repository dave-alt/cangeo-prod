import React from "react";



function Trustcard(props) {
  return (
    <div className="trustcard-wrapper">
      <div className="lottie-animation-wrapper">
         <img src={props.image}/>
      </div>
      <div className="trustcard-heading">{props.heading}</div>
      <p className="trustcard-content">{props.content}</p>
    </div>
  );
}

export default function Trustfactors() {
  return (<>
  <h1 className="coreh1">Our Core Principles</h1>
    <div className="trustfactors">
      <Trustcard
      image="./idea.gif"
        heading="Instigate"
        content="Technologies vary but the business and its innate behavior remains the same. As a pioneer in our field, our initiation with you solely bases on understanding your business goals. With proficient architects in our team, we deliver a thought on how well organized and tranquil your future stands."
      />
      <Trustcard
        image="./admin.gif"
        heading="Administrate"
        content="Our process on delivering you requirements entails a string of practices that ensures that every aspect of your final product is rendered flawless. Providing a positive experience throughout and maintaining an open relationship by regular detailed communications is our priority."
      />
      <Trustcard
        image="./deploy.gif"
        heading="Elevate"
        content="The fruits are now ripe to devour. It is time to witness the benefits of what has been created. With not just a lot of hard work dedicated, but also the time spent in crafting the smart work segments is what ensures that this process is much rewarding."
      />
    </div>
  </>);
}
