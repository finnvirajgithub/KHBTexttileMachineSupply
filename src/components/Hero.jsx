import React from 'react';
import './heroStyles.css';

const Hero = (props) => {
  return (
    <div className={props.classdiv1}>
      <img src={props.img} alt="" className={props.classimg} />

      <div className={props.classdiv2}></div>
      <div className={props.classdiv3}>
        
        <h1 className={props.classh1}>{props.title}</h1>
        <p className={props.classp}>{props.text}</p>
        <a href={props.url} className={props.classa}>{props.btnText}</a>
      </div>
    </div>
  );
};

export default Hero;
