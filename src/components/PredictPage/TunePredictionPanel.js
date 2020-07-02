import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import Box from '../common/Box';
import Meta from '../common/Meta';
import PlusButton from '../common/PlusButton';
import categories from '../../categories';
import sentiments from '../../sentiments';
import Button from '../common/Button';
import { tuneModel } from '../../apis/tune';
import SubTitle from "../common/SubTitle";

const Title = styled.h3`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 500;
  font-size: 0.9rem;
  color: ${props => props.isSuccess ? '#14bc63' : '#eb7134'};
`;

const TunePredictionPanel = ({ className, sentence }) => {
  const [tuneResult, setTuneResult] = useState({text: '', isSuccess: false});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSentiments, setSelectedSentiments] = useState([]);

  const preparedCategories = Object.entries(categories).map(([key, name]) => {
    return { value: key, label: name };
  });

  const preparedSentiments = Object.entries(sentiments).map(([key, name]) => {
    return { value: key, label: name };
  });

  const createTableRow = (index, value) => (
      <tr key={index}>
        <td width="50%">
          <Select
              key={index}
              onChange={(value) => {
                const temp = selectedCategories;
                temp[index] = value;
                setSelectedCategories(temp);
              }}
              options={preparedCategories} />
        </td>
        <td width="50%">
          <Select
              key={index}
              onChange={(value) => {
                const temp = selectedSentiments;
                temp[index] = value;
                setSelectedSentiments(temp);
              }}
              options={preparedSentiments} />
        </td>
      </tr>
  )

  const onAddRowButtonClick = () => {
    setSelectedCategories([...selectedCategories, preparedCategories[0]])
  }

  const isButtonDisabled = (selectedCategories, selectedSentiments) => {
    return selectedCategories.length === 0;
  }

  const onSendButtonClick = () => {
    const markedData = {
      sentence,
      aspects: []
    }

    for (let i = 0; i < selectedCategories.length; i += 1) {
      if (selectedCategories[i].value !== 'empty' && selectedSentiments[i].value !== 'empty') {
        markedData.aspects.push({
          category: selectedCategories[i].value,
          sentiment: selectedSentiments[i].value,
        });
      }
    }

    tuneModel({ markedData })
        .then(() => setTuneResult({text: 'Результат сохранен', isSuccess: true}))
        .catch(() => setTuneResult({text: 'Произошла ошибка', isSuccess: false}));
  }

  return (
    <div className={className} role="link">
      <Box>
        <Meta>
          <SubTitle>Выберите аспекты и тональности</SubTitle>
          <PlusButton onClick={onAddRowButtonClick}/>
        </Meta>
        <table className="table table-bordered table-hover" id="tab_logic">
          <tbody>
            {selectedCategories.map(((value, index) => createTableRow(index, value)))}
          </tbody>
        </table>
        <Button
            disabled={isButtonDisabled(selectedCategories, selectedSentiments)}
            onClick={onSendButtonClick}>
          Отправить
        </Button>
        <Title isSuccess={tuneResult.isSuccess}>{tuneResult.text}</Title>
      </Box>
    </div>
  );
};
const StyledTunePredictionPanel = styled(TunePredictionPanel)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px 28px;
    transition: all 0.1s ease-in-out;
    background: rgb(225, 224, 228);
  }
  ${PlusButton} {
    margin-left: 10px;
  }
  ${Button} {
    padding: 11px 0px 0px 0px;
  }
  ${Title} {
    margin-left: 10px;
  }
`;

export default withRouter(StyledTunePredictionPanel);
