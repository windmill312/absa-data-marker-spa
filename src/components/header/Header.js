import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../common/Container';
import Logo from './Logo';
import Separator from '../common/Separator';

const Text = styled.h3`
  padding-top: 7px;
`;

const Header = ({ className }) => (
  <div className={className}>
    <Container>
      <Link to="/tune">
        <Logo />
      </Link>
      <Text>Aspect Checker</Text>
    </Container>
    <Separator />
  </div>
);

const StyledHeader = styled(Header)`
  background-color: rgb(255, 255, 255);
  ${Container} {
    height: 80px;
    display: flex;
    flex-direction: row;
    width: 100%;
    & > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default StyledHeader;
