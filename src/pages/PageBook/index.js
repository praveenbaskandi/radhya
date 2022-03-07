import BookUi from '../../components/BookUi';
import imgFacebook from '../../assets/social-facebook.png';
import * as S from "./style";

const PageBook = () => (
        <S.Container>
          <S.Heading>Books Us</S.Heading>
            <S.BookBox>
            <BookUi bookName="aedfwef" bookImage={imgFacebook}/>
            <BookUi bookName="aedfwef" bookImage={imgFacebook}/>
            </S.BookBox>
        </S.Container>
);

export default PageBook;