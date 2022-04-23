import useSelect from '../selector';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./style";

const PageQuote = () => {
        const {translations} = useSelect();

return(
        <S.Container>
        <S.ContainerInside>
        <S.CategoryBox>
            <S.Heading>{translations.quotes}</S.Heading>
            </S.CategoryBox>
            <S.SocialBox>
            <S.CarouselView autoPlay infiniteLoop showArrows={false} stopOnHover dynamicHeight={false}> 
                    <S.Quotes>{translations.quotes1}</S.Quotes>
                    <S.Quotes>{translations.quotes2}</S.Quotes>
                    <S.Quotes>{translations.quotes3}</S.Quotes>
            </S.CarouselView>
         </S.SocialBox>
         </S.ContainerInside>
        </S.Container>
);
};

export default PageQuote;
