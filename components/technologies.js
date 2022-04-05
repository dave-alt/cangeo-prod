import React from "react";


function TechnologyCard(props) {
  return (
    <div className="tech-wrapper">
      <div className="tech-image">
        <img src={props.image} />
      </div>
      <div className="tech-name">{props.name}</div>
    </div>
  );
}

export default function Technologies() {
  return (
    <div className="tech-cards-container">
      <TechnologyCard name="Figma" image="./figma.png" />
      <TechnologyCard name="Adobe XD" image="./xd.webp" />
      <TechnologyCard name="Rive" image="./rive.webp" />
      <TechnologyCard name="React" image="./react.png" />
      <TechnologyCard name="Express" image="./express.png" />
      <TechnologyCard name="Django" image="./django.webp" />
      <TechnologyCard name="Next JS" image="./next.png" />
      <TechnologyCard name="Node JS" image="./node.png" />
      <TechnologyCard name="MongoDB" image="./mongo.webp" />
      <TechnologyCard name="MySQL" image="./mysql.png" />
      <TechnologyCard name="Premiere Pro" image="./pr.png" />
      <TechnologyCard name="After Effects" image="./ae.png" />
    </div>
  );
}
