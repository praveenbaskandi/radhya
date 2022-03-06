import BookUi from '../../components/BookUi';
import imgFacebook from '../../assets/social-facebook.png';
import "./style.css";

const PageBook = () => (
        <div style={{height: '500px', width: "100%" }} className='content'>
            <BookUi bookName="aedfwef" bookImage={imgFacebook}/>
            <BookUi bookName="aedfwef" bookImage={imgFacebook}/>
        </div>
);

export default PageBook;