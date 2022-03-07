import {SOCIAL_LINK} from '../../constants';
import imgFacebook from '../../assets/social-facebook.png';
import imgTwitter from '../../assets/social-twitter.png';
import imgInsta from '../../assets/social-instagram.png';
import imgYoutube from '../../assets/social-youtube.png';
import imgLinkdin from '../../assets/social-linkedin.png';
import * as S from "./style";

const Page4 = () => (
        <S.Container>
            <S.Heading>Follow Us</S.Heading>
         <S.SocialContainer>
           <S.SocialFacebook onClick={()=> window.open(SOCIAL_LINK.FACEBOOK, "_blank")}>
            <S.Image src={imgFacebook} alt="imgFacebook"/>
           </S.SocialFacebook>
           <S.SocialTwitter onClick={()=> window.open(SOCIAL_LINK.TWITTER, "_blank")}>
            <S.Image src={imgTwitter} alt="imgTwitter" />
           </S.SocialTwitter>
        <S.SocialInsta onClick={()=> window.open(SOCIAL_LINK.INSTAGRAM, "_blank")}>
        <S.Image src={imgInsta} alt="imgInsta" />
        </S.SocialInsta>
        <S.SocialYoutube onClick={()=> window.open(SOCIAL_LINK.YOUTUBE, "_blank")}>
        <S.Image src={imgYoutube} alt="imgYoutube" />
        </S.SocialYoutube>
        <S.SocialLinkdin  onClick={()=> window.open(SOCIAL_LINK.LINKDIN, "_blank")}>
         <S.Image src={imgLinkdin} alt="imgLinkdin" />
          </S.SocialLinkdin>
         </S.SocialContainer>
        </S.Container>
);

export default Page4;