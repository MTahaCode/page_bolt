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
            PageBolt can maximizw your money flow</p>
          <p style={{fontSize:"1.5vw", lineHeight:"2vw"}}>You no longer need to go home or go to 
          the bank to do this. Only through this platform, 
          all financial activities can be completed</p>
          <div className="Buttons">
            <Button Name="Get Started" Color="orange"/>
            <Button Name="Learn More" Color="blue"/>
          </div>
          <TickLine Desc="Financial Transactions Become Easier"/>
          <TickLine Desc="Accelerating Economic Turnover"/>
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
  