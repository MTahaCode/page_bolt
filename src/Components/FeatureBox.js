import "../styles/FeatureBox.css"

const FeatureBox = ({Heading , Desc , Img}) => {
    return (
      <div className="FeatureBox">
        <div style={{height:"10vw"}}>
          <p style={{fontSize:"2vw", fontWeight:"500"}}>{Heading}</p>
        </div>
        <p style={{fontSize:"1.5vw", marginTop:"-3vw"}}>{Desc}</p>
        <img src={Img} alt="" />
      </div>
    );
  };
  
  export default FeatureBox;
  