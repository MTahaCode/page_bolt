import TickLine from "./TickLine";
import img1 from "../Images/Fintech-Cashflow-Image-1.webp"
import img2 from "../Images/Fintech-Cashflow-Image-2.webp"
import img3 from "../Images/Fintech-Cashflow-Image-3.webp"
import "../styles/Role.css"
import "../styles/InDepth.css"

const InDepth = () => {

    return (
      <div className="Role">
        <div style={{marginLeft:"60px", marginRight:"-50px"}}>
            <p className="Heading">Get in-depth insight on your cashflow</p>
            <p style={{position: "relative", left: "-40px"}}>Give your accounting team a partner they
             can rely on. Automate the boring parts and make sure your financial 
             calculations are always accurate.</p>
            <div style={{position: "relative", left: "-40px"}}>
                <TickLine Desc="Financial transaction become easier" />
                <TickLine Desc="Better funding access" />
                <TickLine Desc="Supporting financial inclusion" />
            </div>
        </div>
        <div >
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{position:"relative", border:"2px solid black", borderRadius:"20px", width:"20vw", height:"12vw", margin:"20px"}}>
                    <img  style={{borderRadius:"30px", width:"20vw", margin:"20px", position:"absolute", top:"10px", right:"10px"}}src={img1} alt="" />
                </div>
                <div style={{position:"relative", border:"2px solid black", borderRadius:"20px", width:"20vw", height:"12vw", margin:"20px"}}>
                    <img  style={{borderRadius:"30px", width:"20vw", margin:"20px", position:"absolute", top:"10px", right:"10px"}}src={img2} alt="" />
                </div>

            </div>
            <div style={{position:"relative", border:"2px solid black", borderRadius:"20px", width:"50vw", height:"34vw", marginTop:"50px", left:"30px"}}>
                <img style={{borderRadius:"30px", width:"50vw"}}src={img3} alt="" />
            </div>
        </div>
      </div>
    );
  };
  
  export default InDepth;
  