import {SOCIAL_LINK} from '../../constants';
import imgFacebook from '../../assets/social-facebook.png';
import imgTwitter from '../../assets/social-twitter.png';
import imgInsta from '../../assets/social-instagram.png';
import imgYoutube from '../../assets/social-youtube.png';
import imgLinkdin from '../../assets/social-linkedin.png';
import useSelect from '../selector';
import * as S from "./style";

const PageSocial = () => {
        const {translations} = useSelect();

return(
        <S.Container>
        <S.ContainerInside>
            <S.SocialBox>
                    <S.SocialFacebook onClick={()=> window.open(SOCIAL_LINK.FACEBOOK, "_blank")}>
            <S.Image src={imgFacebook}/>
           </S.SocialFacebook>
           <S.SocialTwitter onClick={()=> window.open(SOCIAL_LINK.TWITTER, "_blank")}>
            <S.Image src={imgTwitter} />
           </S.SocialTwitter>
           <S.SocialInsta onClick={()=> window.open(SOCIAL_LINK.INSTAGRAM, "_blank")}>
        <S.Image src={imgInsta} />
        </S.SocialInsta>
        <S.SocialYoutube onClick={()=> window.open(SOCIAL_LINK.YOUTUBE, "_blank")}>
        <S.Image src={imgYoutube} />
        </S.SocialYoutube>
        <S.SocialLinkdin  onClick={()=> window.open(SOCIAL_LINK.LINKDIN, "_blank")}>
         <S.Image src={imgLinkdin} />
          </S.SocialLinkdin>
         </S.SocialBox>
         <S.CategoryBox>
            <S.Heading>{translations.followUs}</S.Heading>
            </S.CategoryBox>
         </S.ContainerInside>
        </S.Container>
);
};

export default PageSocial;
