import "../styles/Products.css"
import ProductBox from "./ProductBox.js"
import img1 from "../Images/Product_img_1.PNG"
import img2 from "../Images/Product_img_2.PNG"
import img3 from "../Images/Product_img_3.PNG"
import img4 from "../Images/Product_img_4.PNG"
import img5 from "../Images/Product_img_5.PNG"
import img6 from "../Images/Product_img_6.PNG"

const Products = () => {

    return (
      <div className="Products">
        <p className="Heading">We've created a full suite of products</p>
        <div style={{display:"flex"}}>
          <ProductBox Title="Payment Feature Ultimate" 
          Desc="Venenatis velit ultrices id vitae commodo ipsum 
          dictumst dui posuere, ipsum imperdiet molestie aliquam 
          dictumst nostra orci nostra tristique amet, aliquam mi 
          egestas sagittis." Img={img1}/>

          <ProductBox Title="Finance Analytics" 
          Desc="VArcu sed eu phasellus feugiat mattis, dolor iaculis 
          turpis sit risus ornare consequat quam, urna eleifend?" 
          Img={img2}/>

          <ProductBox Title="Intelligence Software" 
          Desc="Id volutpat sapien aptent, dictum primis commodo tortor,
          lacinia bibendum vitae etiam elit malesuada." Img={img3}/>

        </div>

        <div style={{display:"flex"}}>
          <ProductBox Title="Finance Analytics" 
          Desc="Venenatis velit ultrices id vitae commodo ipsum dictumst 
          dui posuere, ipsum imperdiet molestie aliquam dictumst nostra 
          orci nostra tristique amet, aliquam mi egestas sagittis." 
          Img={img4}/>

          <ProductBox Title="New Optimizations" 
          Desc="Cras venenatis sapien purus volutpat, cubilia 
          blandit, sodales faucibus suscipit phasellus duis." Img={img5}/>

          <ProductBox Title="Analytics" 
          Desc="Quisque aptent aenean dictumst blandit orci porttitor, 
          praesent at erat fringilla enim donec vitae ornare vel
          interdum metus, faucibus duis mollis." Img={img6}/> 
        </div>       
      </div>
    );
  };
  
  export default Products;
  