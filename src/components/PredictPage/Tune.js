import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import TextArea from '../common/TextArea';
import Box from '../common/Box';
import Separator from '../common/Separator';
import SubTitle from '../common/SubTitle';
import Title from '../common/Title';
import Content from '../common/Content';
import Button from '../common/Button';
import AspectsList from './AspectsList';
import TunePanel from './TunePredictionPanel';
import OptionalRender from "../common/OptionalRender";
import Meta from "../common/Meta";
import ClearButton from "../common/ClearButton";

const Tune = ({ className }) => {

  const [textValue, setTextValue] = useState('');

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>Корректировка</Title>
        </Content>
        <Separator />
        <Content>
          <Meta>
            <SubTitle>Введите отзыв</SubTitle>
            <OptionalRender when={textValue !== ''}>
              <ClearButton onClick={() => setTextValue('')} />
            </OptionalRender>
          </Meta>
          <TextArea value={textValue} onChange={e => {setTextValue(e.currentTarget.value)}}/>
          <OptionalRender when={textValue !== ''}>
            <TunePanel sentence={textValue} />
          </OptionalRender>
        </Content>
      </Box>
    </div>
  );
};

const StyledCheck = styled(Tune)`
  ${Title} {
    margin-bottom: 10px;
    color: rgb(38, 38, 38);
    margin-top: 10px;
  }
  ${Button} {
    margin: 10px 0px 0px 0px;
    padding: 11px 40px;
  }
  ${TextArea} {
    flex: auto;
    min-height: 100px;
    margin: 0px 40px 0px 0px;
    width: 100%;
  }
  ${Box} {
    min-height: 100px;
  }
  ${TunePanel} {
    margin: 10px 0px 0px 0px;
  }
  ${AspectsList} {
    margin-top: 20px;
  }
  ${ClearButton} {
    margin-left: 10px;
  }
`;

export default withRouter(StyledCheck);
