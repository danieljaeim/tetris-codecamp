import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={ type } color={ TETROMINOS[type].color }></StyledCell>
)

export default Cell; 