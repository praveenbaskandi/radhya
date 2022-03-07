import BookUi from '../../components/BookUi';
import imgBook1 from '../../assets/book-1.png';
import imgBook2 from '../../assets/book-2.png';
import imgBook3 from '../../assets/book-3.png';
import * as S from "./style";

const PageBook = () => (
        <S.Container>
          <S.Heading>Books Us</S.Heading>
            <S.BookBox>
            <BookUi bookName="aedfwef" bookImage={imgBook1}/>
            <BookUi bookName="aedfwef" bookImage={imgBook2}/>
            <BookUi bookName="aedfwef" bookImage={imgBook3}/>
            </S.BookBox>
        </S.Container>
);

export default PageBook;