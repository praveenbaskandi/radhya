import PageSocial from './PageSocial';
import PageBook from './PageBook';
import PageAbout from './PageAbout';
import PageFooter from './PageFooter';
import PageQuote from './PageQuote';
import * as S from "./style";

const HomePage = () => (
        <S.Container>
          <PageAbout />
          <PageBook />
          <PageSocial />
          <PageQuote />
          <PageFooter />
        </S.Container>
);

export default HomePage;