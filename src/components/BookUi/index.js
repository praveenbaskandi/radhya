import React from 'react';
import {string} from 'prop-types';

import * as S from "./style";


const BookUi = ({bookImage, bookName}) => {
  return (
      <S.Container>
          <S.ImageView src={bookImage} />
          <S.Heading>{bookName}</S.Heading>
        </S.Container>
  );
};

BookUi.propTypes = {
    bookImage: string.isRequired,
    bookName: string.isRequired,
};

export default BookUi;