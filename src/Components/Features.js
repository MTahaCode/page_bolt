import FeatureBox from "./FeatureBox";
import img1 from "../Images/Fintech-Features-Image-1.webp"
import img2 from "../Images/Fintech-Features-Image-2.webp"
import img3 from "../Images/Fintech-Features-Image-3.webp"
import "../styles/Features.css"

const Features = () => {
    return (
      <div className="Features">
        <p className="Heading">App features that help manage money more organized</p>
        <div className="Boxes">
          <FeatureBox Heading="Facilitate Financial Services"
                Desc="Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas."
                Img={img1}
          />
          <FeatureBox Heading="Fintech as an Alternative Investment Tool"
              Desc="Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas."
              Img={img2}
          />
          <FeatureBox Heading="Financial Transactions Become Easier"
              Desc="Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas."
              Img={img3}
          />
        </div>
      </div>
    );
  };
  
  export default Features;
  