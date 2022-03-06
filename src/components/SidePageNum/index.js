import React, { useState } from 'react';


// custom css
import "./style.css";


const SidePageNum = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  return (
      <div className="container">
          <div className="box">
           <div className="squareBox" />
           <p className="textNumber">1</p>
          </div>
        <div className="line" />
        <p className="textName">C<br />O<br />N<br />T<br />A<br />C<br />T</p>
      </div>
  
  );
};

export default SidePageNum;