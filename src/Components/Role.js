import TickLine from "./TickLine";
import img1 from "../Images/Fintech-Role-Image-1.webp"
import img2 from "../Images/Fintech-Role-Image-2.webp"
import img3 from "../Images/Fintech-Role-Image-3.webp"
import "../styles/Role.css"

const Role = () => {

    return (
      <div className="Role">
        <img className="Credit" src={img1} alt="" />
        <div className="SmallPics">
            <img className="MasterCard" src={img3} alt="" />
            <img className="Dollar" src={img2} alt="" />
        </div>
        <div style={{marginLeft:"60px"}}>
            <p className="Heading">The role of Fintech in the payment system</p>
            <p style={{position: "relative", left: "-40px"}}>FinTech is able to replace the role of formal financial 
                institutions such as banks. In terms of the payment 
                system.</p>
            <div style={{position: "relative", left: "-40px"}}>
                <TickLine Desc="Become a tool for payment, settlement and clearing" />
                <TickLine Desc="Helping to make investments more efficient" />
                <TickLine Desc="Become a tool for payment, settlement and clearing" />
            </div>
        </div>
      </div>
    );
  };
  
  export default Role;
  