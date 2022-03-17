import useSelect from '../selector';
import * as S from "./style";

const PageFooter = () => {
const {translations} = useSelect();

return (
        <S.Container>
        <S.ContainerInside>
        <S.AboutBox>
            <S.Heading>{translations.copyright}</S.Heading>
            <S.SubHeading>{translations.createdBy}</S.SubHeading>
        </S.AboutBox>
        </S.ContainerInside>
        </S.Container>
);
};

export default PageFooter;
