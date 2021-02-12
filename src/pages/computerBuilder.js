import React from "react";

import Card from '../components/card'
import './computerBuilder.css'

const ComputerBuilder = ({build}) => {
  return (
    <div id="home-page">
      <div className="landing-page">
        <div className="text">
          <div className="big-text">
            <h1>PC Builder</h1>
            <div className="underline"></div>
          </div>
          <span>Create your own custom PC</span>
          <p class="scroll-down"><a href="#complements" class="animate">More</a></p>
        </div>
      </div>
      <div className="landing-page">
        <h2>Get Started</h2>
        <Card build={build} buttons={["create"]}/>
      </div>
    </div>
  );
};

export default ComputerBuilder;
