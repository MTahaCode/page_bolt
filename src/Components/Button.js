import "../styles/Button.css"

const Button = ({Name="Name", Color="transparent"}) => {

    const Arrow = ">";
    return (
      <div className="Button">
        <button style={{backgroundColor:Color}}>{Name} <p style={{paddingLeft:"20px"}}>{Arrow}</p></button>
      </div>
    );
  };
  
  export default Button;
  