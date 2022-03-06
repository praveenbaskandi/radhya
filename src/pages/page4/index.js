import imgFacebook from '../../assets/social-facebook.png';
import imgTwitter from '../../assets/social-twitter.png';
import imgInsta from '../../assets/social-instagram.png';
import imgYoutube from '../../assets/social-youtube.png';
import imgLinkdin from '../../assets/social-linkedin.png';
import "./style.css";

const Page4 = () => (
        <div style={{height: '500px', width: "100%" }} className='content'>
            <span className="img-txt">a trip to Space</span>
         <div className='socialBox'>
           <div className='socialFacebook'>
            <img src={imgFacebook} alt="imgFacebook" className='socialIcon' />
           </div>
           <div className='socialTwitter'>
            <img src={imgTwitter} alt="imgTwitter" className='socialIcon'/>
           </div>
        <div className='socialInstagram' onClick={()=> window.open("https://www.google.com/", "_blank")}>
        <img src={imgInsta} alt="imgInsta" className='socialIcon'/>
        </div>
        <div className='socialYoutube'>
        <img src={imgYoutube} alt="imgYoutube" className='socialIcon'/>
        </div>
        <div className='socialLinkdin'>
        <img src={imgLinkdin} alt="imgLinkdin" className='socialIcon'/>
        </div>
        </div>
        </div>
);

export default Page4;