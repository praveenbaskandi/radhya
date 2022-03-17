import React, {useState} from 'react';
import {string, number} from 'prop-types';

import * as S from "./style";

const SocialView = ({bookImage, bookName, bookContent, buyLink, mt}) => {
    const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
        <S.Container mt={mt} onClick={() => {setIsFlipped(!isFlipped)}}>
          <S.ImageView src={bookImage} />
          <S.BoxContainer>
          <S.Heading>{bookName}</S.Heading>
          <S.Content>{bookContent}</S.Content>
          <S.Button onClick={()=> window.open(buyLink, "_blank")}>Buy</S.Button>
          </S.BoxContainer>
        </S.Container>
  </>
  );
};

SocialView.propTypes = {
    bookImage: string.isRequired,
    bookName: string.isRequired,
    bookContent: string.isRequired,
    buyLink: string.isRequired,
    mt: number.isRequired,
};

export default SocialView;