import styled from 'styled-components';
import logoPng from '../../assets/thumbs-down.png';

const NegativeSentimentLogo = styled.div`
    height: 50px;
    width: 100px;
    background: url("${logoPng}") no-repeat center;
    background-size: contain;
`;

export default NegativeSentimentLogo;
