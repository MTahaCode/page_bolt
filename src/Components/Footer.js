import Logo from "../Images/PageBoltLogo.webp"
import "../styles/Footer.css"

const Footer = () => {

    return (
      <div className="Footer">
        <p style={{fontSize:"50px", position:"relative", left:"25%"}}>Subscribe to Our NewsLetter</p>
        {/* <Email /> */}
        <div style={{display:"flex", flexDirection:"row"}}>
            <div>
                <img src={Logo} alt="" />
                <p>Platforms help your money to be better</p>
                <p>Copyright: © 2023 PageBolt WordPress theme 
                by UiCore. All Rights Reserved.</p>
            </div>
            <div className="Column">
                <p style={{fontWeight:"600"}}>Features</p>
                <p>Saving goal</p>
                <p>Cash back rewards</p>
                <p>Early payday</p>
                <p>Financial Freedom</p>
                <p>Websites</p>
            </div>
            <div className="Column">
                <p style={{fontWeight:"600"}}>Support</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Getting Startedy</p>
            </div>
            <div className="Column">
                <p style={{fontWeight:"600"}}>Company</p>
                <p>About us</p>
                <p>Carrer</p>
                <p>Support</p>
                <p>Hire an Expert</p>
            </div>
            <div className="Column">
                <p style={{fontWeight:"600"}}>Resources</p>
                <p>FAQs</p>
                <p>Articles</p>
                <p>Webinars</p>
                <p>Blog</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  