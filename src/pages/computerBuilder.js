import React from "react";

import Card from '../components/card'

const ComputerBuilder = ({build}) => {



  return (
    <div>
      <Card build={build} buttons={["create"]}/>
    </div>
  );
};

export default ComputerBuilder;
