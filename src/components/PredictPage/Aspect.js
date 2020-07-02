import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import PositiveSentimentLogo from './PositiveSentimentLogo';
import NegativeSentimentLogo from './NegativeSentimentLogo';
import Meta from '../common/Meta';
import categories from '../../categories';

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const PreparedAspect = ({ aspect }) => {
  return <Title>{categories[aspect]}</Title>;
};

const SentimentLogo = ({ sentiment }) => {
  if (sentiment === 'positive') {
    return <PositiveSentimentLogo />;
  }
  return <NegativeSentimentLogo />;
};

const Aspect = ({ className, aspect, sentiment }) => {
  return (
    <div className={className} role="link">
      <Box>
        <Meta>
          <PreparedAspect aspect={aspect} />
          <SentimentLogo sentiment={sentiment} />
        </Meta>
      </Box>
    </div>
  );
};

const StyledAspect = styled(Aspect)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px 28px;
    transition: all 0.1s ease-in-out;
    background: rgb(225, 224, 228);
  }
  @media (max-width: 450px) {
    ${Meta} {
      flex-direction: column;
    }
    ${Title} {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
  }
`;

export default withRouter(StyledAspect);
