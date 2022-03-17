import faceImg from '../../assets/face.png';
import useSelect from '../selector';
import * as S from "./style";

const PageAbout = () => {
const {translations} = useSelect();

return (
        <S.Container>
        <S.ContainerInside>
        <S.AboutBox>
            <S.Heading>Books Us</S.Heading>
            <S.SubHeading>{translations.redhyaIsAnIndianAuthor}</S.SubHeading>
        </S.AboutBox>
        <S.Image src={faceImg}/>
        </S.ContainerInside>
        </S.Container>
);
};

export default PageAbout;