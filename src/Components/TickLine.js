import "../styles/tickline.css"

const TickLine = ({Desc}) => {

    return (
      <div className="TickLine">
        <div class="tick-circle">
          <div class="tick"></div>
        </div>
        <p>{Desc}</p>
      </div>
    );
  };
  
  export default TickLine;
  