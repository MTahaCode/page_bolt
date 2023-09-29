import pageBoltLogo from "../Images/PageBoltLogo.webp"
import "../styles/Header.css"
import Button from "./Button";

const Header = () => {

return (
    <div className="Header">
        <img src={pageBoltLogo} alt="" />
        <a href="">Features</a>
        <a href="">How It Works</a>
        <a href="">Products</a>
        <a href="">Clients Stories</a>
        <div className="OrangeButton">
        <Button Name="Sign In" Color=""/>
        <Button Name="Get Started" Color="orange"/>
        </div>
        {/* <button>Sign In</button>
        <button>Get Started</button> */}
    </div>
);
};

export default Header;
