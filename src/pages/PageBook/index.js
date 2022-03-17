import {BOOK_TEXT} from '../../constants';
import CardFlip from '../../components/CardFlip';
import imgBook1 from '../../assets/book-1.png';
import imgBook2 from '../../assets/book-2.png';
import imgBook3 from '../../assets/book-3.png';
import * as S from "./style";

const PageBook = () => (
        <S.Container>
          <S.ContainerInside>
            <S.CategoryBox>
          <S.Heading>Books Us</S.Heading>
          </S.CategoryBox>
            <S.BookBox>
              <S.ContainerInside>
            <CardFlip bookName={BOOK_TEXT.BOOK_1.text} bookContent={BOOK_TEXT.BOOK_1.content} bookImage={imgBook1} buyLink={BOOK_TEXT.BOOK_1.buy} mt={0}/>
            <CardFlip bookName={BOOK_TEXT.BOOK_2.text} bookContent={BOOK_TEXT.BOOK_2.content} bookImage={imgBook2} buyLink={BOOK_TEXT.BOOK_2.buy} mt={0}/>
            </S.ContainerInside>
            <S.ContainerInside>
            <CardFlip bookName={BOOK_TEXT.BOOK_3.text} bookContent={BOOK_TEXT.BOOK_3.content} bookImage={imgBook3} buyLink={BOOK_TEXT.BOOK_3.buy} mt={20}/>
            <CardFlip bookName={BOOK_TEXT.BOOK_3.text} bookContent={BOOK_TEXT.BOOK_3.content} bookImage={imgBook3} buyLink={BOOK_TEXT.BOOK_3.buy} mt={20}/>
            </S.ContainerInside>
            </S.BookBox>
            </S.ContainerInside>
        </S.Container>
);

export default PageBook;
