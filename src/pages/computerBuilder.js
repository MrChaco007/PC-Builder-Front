import React, { useRef } from "react";

import Card from '../components/card'
import './computerBuilder.css'

const ComputerBuilder = ({build}) => {

  const myRef = useRef(null)

  const executeScroll = () => {
    console.log('clicked')
    myRef.current.scrollIntoView()
  }

  return (
    <div id="home-page">
      <div className="landing-page">
        <div className="text">
          <div className="big-text">
            <h1>PC Builder</h1>
            <div className="underline"></div>
          </div>
          <span>Create your own custom PC</span>
        </div>
        <div className="container">
            <div className="content" onClick={executeScroll}>
              <svg id="more-arrows" >
                <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
              </svg>
            </div>
          </div>
      </div>
      <div ref={myRef} className="landing-page">
        <h2>Get Started</h2>
        <Card build={build} buttons={["create"]}/>
      </div>
    </div>
  );
};

export default ComputerBuilder;
