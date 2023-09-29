import GirlPic from "../Images/Fintech-Hero-Image.webp"
import CreditCard from "../Images/Fintech-Hero-Image-2.webp"
import Boxes from "../Images/Fintech-Ornament.webp"
import Intro from "./Intro.js"
import Features from "./Features"
import Role from "./Role.js"
import InDepth from "./InDepth.js"
import Products from "./Products.js"
import ClientStories from "./ClientStories.js"
import Services from "./Services.js"
import Footer from "./Footer.js"

const Body = () => {

    return (
      <div className="Body">
        <Intro />
        <Features />
        <Role />
        <InDepth />
        <Products />
        <ClientStories />
        <Services />
        <Footer /> 

      </div>
    );
  };
  
  export default Body;
  