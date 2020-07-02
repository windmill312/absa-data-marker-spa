import React from 'react';
import styled from 'styled-components';
import Aspect from './Aspect';
import Meta from '../common/Meta';

const AspectsList = ({ className, aspects }) => (
  <div className={className}>
    {aspects.map(aspect => (
      <Aspect aspect={aspect.aspect} sentiment={aspect.sentiment} />
    ))}
  </div>
);

const StyledEvents = styled(AspectsList)`
  ${Meta} {
    justify-content: space-between;
  }
`;

export default StyledEvents;
