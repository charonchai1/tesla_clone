import React from "react";
import Section from "./Section";
import "./home.css";

function Home() {
  return (
    <div className="Container">
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        topBtn="Custom order"
        buttomBtn="Existing inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        topBtn="Custom order"
        buttomBtn="Existing inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        topBtn="Custom order"
        buttomBtn="Existing inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        topBtn="Custom order"
        buttomBtn="Existing inventory"
      />
      <Section
        title="Lowest Cost solar panels in thailand"
        desc="guarantee by elon musk"
        backgroundImg="solar-panel.jpg"
        topBtn="Order Now"
        buttomBtn="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than u think"
        backgroundImg="solar-roof.jpg"
        topBtn="Order Now"
        buttomBtn="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        desc=""
        backgroundImg="accessories.jpg"
        topBtn="Shop Now"
      />
    </div>
  );
}

export default Home;
