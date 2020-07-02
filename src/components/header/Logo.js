import styled from 'styled-components';
import logoPng from '../../assets/header-logo.png';

const Logo = styled.div`
    height: 50px;
    width: 100px;
    background: url("${logoPng}") no-repeat center;
    background-size: contain;
`;

export default Logo;
