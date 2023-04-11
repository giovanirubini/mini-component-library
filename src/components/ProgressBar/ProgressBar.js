/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let ProgressContainer = ProgressContainerBase; 
  let ProgressMeter = ProgressMeterBase;

if (size === 'small') {
  ProgressMeter = ProgressMeterSmall;
} else if (size === 'large') {
  ProgressMeter = ProgressMeterLarge;
}

  return (
    <ProgressContainer role="presentation">
      <VisuallyHidden><label for="loadinglabel">Loading:</label></VisuallyHidden>
      <ProgressMeter id="loadinglabel"  max={100} value={value}></ProgressMeter>
    </ProgressContainer>
  );
};

const ProgressContainerBase = styled.div`
  border-radius: 0.25rem;
`;

const ProgressMeterBase = styled.progress`
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  &::-webkit-progress-bar {
    border-radius: 0.25rem;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    border-radius: 0.25rem;
    border-top-right-radius: ${props => props.value === props.max ? 0.25 : 0}rem;
    border-bottom-right-radius: ${props => props.value === props.max ? 0.25 : 0}rem;
    background-color: ${COLORS.primary};
  }
`;

const ProgressMeterSmall = styled(ProgressMeterBase)`
  height: 8px;
`;

const ProgressMeterLarge = styled(ProgressMeterBase)`
  height: 16px;
  &::-webkit-progress-bar {
    padding: 2px;
  }
`;

export default ProgressBar;
