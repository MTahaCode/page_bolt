import "../styles/Products.css"

const ProductsBox = ({Title, Desc, Img}) => {

    return (
      <div className="ProductsBox">
        <img src={Img} alt="" />
        <p style={{fontSize:"30px", fontWeight:"500"}}>{Title}</p>
        <p>{Desc}</p>
      </div>
    );
  };
  
  export default ProductsBox;
  