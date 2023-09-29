import GirlPic from "../Images/Fintech-Hero-Image.webp"
import CreditCard from "../Images/Fintech-Hero-Image-2.webp"
import Boxes from "../Images/Fintech-Ornament.webp"
import "../styles/Intro.css"
import Button from "./Button"
import TickLine from "./TickLine"

const Intro = () => {

    return (
      <div className="Intro">
        <div className="Words">
          <p style={{fontSize:"4vw", margin: "-3px", fontWeight:"bold"}}>
            Facilitate Accessible Financial Services</p>
          <p style={{fontSize:"1.5vw", lineHeight:"2vw"}}>YE-wallet 
          that facilitates financial transactions anytime and anywhere 
          with just a mobile device.</p>
          <TickLine Desc="Financial Transactions Become Easier"/>
          <TickLine Desc="Suppoering Financial Inclusion"/>
          <TickLine Desc="Better Funding Access"/>

        </div>
        <div className="IntroPictures">
            <img className="credit" src={CreditCard} alt="" />
            <img className="GirlPic" src={GirlPic} alt="" />
            <img className="Boxes" src={Boxes} alt="" />
        </div>
      </div>
    );
  };
  
  export default Intro;
  