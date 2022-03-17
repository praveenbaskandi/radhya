import React from 'react';
import {string, number} from 'prop-types';

import useSelect from '../../pages/selector';
import * as S from "./style";

const CardFlip = ({bookImage, bookName, bookContent, buyLink, mt}) => {
  const {translations} = useSelect();
  return (
        <S.Container mt={mt}>
          <S.ImageView src={bookImage} />
          <S.BoxContainer>
          <S.Heading>{bookName}</S.Heading>
          <S.Content>{bookContent}</S.Content>
          <S.Button onClick={()=> window.open(buyLink, "_blank")}>{translations.buy}</S.Button>
          </S.BoxContainer>
        </S.Container>
  );
};

CardFlip.propTypes = {
    bookImage: string.isRequired,
    bookName: string.isRequired,
    bookContent: string.isRequired,
    buyLink: string.isRequired,
    mt: number.isRequired,
};

export default CardFlip;
