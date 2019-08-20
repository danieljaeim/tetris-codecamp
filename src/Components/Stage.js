import React from 'react';
import Cell from './Cell';
import '../Stylesheets/stage.css';

import { StyledStage } from './Styles/StyledStage';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length} className="stage">
    {stage.map(row => row.map((cell, x) => 
      <Cell key={x} type={cell[0]} />
    ))}
  </StyledStage>
)

export default Stage; 