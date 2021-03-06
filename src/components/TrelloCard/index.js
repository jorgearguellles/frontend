import React from 'react';
import {
  WrapperTrelloCard,
  WrapperTitle,
  WrapperLabels,
  WrapperLabelRight,
  WrapperLabelLeft,
  Title,
} from './styles';

const TrelloCard = () => {
  return (
    <WrapperTrelloCard>
      <WrapperTitle>
        <Title>Globant</Title>
      </WrapperTitle>
      <WrapperLabels>
        <WrapperLabelLeft>Label L</WrapperLabelLeft>
        <WrapperLabelRight>label R</WrapperLabelRight>
      </WrapperLabels>
    </WrapperTrelloCard>
  );
}

export default TrelloCard;
