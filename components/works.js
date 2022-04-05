import React from "react";

function Work(props) {
  return (
    <>
      <div className="work-container">
        <div className="work-card">
          <div className="work-image-container">
            <img src={props.image} />
          </div>
          <div className="work-content-container">
            <h1 className="work-heading"> {props.heading}</h1>
            <p className="work-content"> {props.content} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Works() {
  return (<div className="works-container">
      
      <Work image="./motor.png" heading="Motor Ranch E-commerce" content="Motor Ranch is a motor-accessory store that ships its products all over India. The sales is being ramped up with its Social Media Presence teamed with SEO and SSR."/>
      <Work image="./teckart.png" heading="Teckart E-commerce" content="Teckart is a retailer store that has a wide range of electronic goods ranging from Joysticks to play stations. With our team, they successfully gained exposure to the reach of many customers. Using SPA's helped reloading time."/>
      <Work image="./freaky.png" heading="Freaky Tribes E-commerce" content="Freaky tribes is a urban psychedelic style clothing retailer that sells big brand name apparels. With modern color themes and product suggestions, it is a game changer in clothing store e-commerce."/>
      <Work image="./shoe.png" heading="Footwear E-commerce" content="Its an ongoing project that focuses on footwears. We are following user centric design for making it accessible."/>
      <Work image="./cms.png" heading="CMS System" content="Its unproductive to rely on developers for every update inside a product. This can be improved by integrating a Content Management System aka CMS. This helps shop / Blog owner to make changes in the site seamless with little Effort. "/>
  </div>);
}
