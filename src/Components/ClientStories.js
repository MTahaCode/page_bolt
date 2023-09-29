import "../styles/ClientStories.css"
import img1 from "../Images/Fintech-Testimonial-Image-1.webp"
import img2 from "../Images/Fintech-Testimonial-Image-2.webp"
import img3 from "../Images/Fintech-Testimonial-Image-3.webp"
import {useState, useEffect, useRef} from "react"

const ClientStories = () => {

    const Images = [
      {
        img: img1,
        name: "Davis Workman",
        ceo: "CEO at Soecter",
        desc: `"Since I started using this fintech app, managing my finances has become so much easier. I can track my spending, set savings goals, and even invest all in one place"`
      },
      {
        img: img2,
        name: "Titiana Gouse",
        ceo: "CEO at ReWork",
        desc: `"Ive, been a customer of this fintech company for over a year now, and I've been consistently impressed with their customer service."`
      },
      {
        img: img3,
        name: "Ruben Dokidis",
        ceo: "CEO at Valid",
        desc: `"As someone who's never been partiularly knowledgeable or interested in investing, I was initially hesitant to try out this fintech company's investment platform."`
      }];
    const [imageIndex, setImageIndex] = useState(0);
    const [Anima, setAnima] = useState("");
    const Commenter = useRef(null);

    const AnimaEffect = () => 
    {
      setAnima("Animate");
    }
    
    const AnimaEffectDelete = () =>
    {
      Commenter.current.style.transform = "translateX(-200%)"
      setAnima("");
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
        AnimaEffect();
      }, 6000);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div className="ClientStories">
        <div className={"Box " + Anima} onAnimationEnd={AnimaEffectDelete} ref={Commenter}>
            <img 
              src={Images[imageIndex].img}
              alt="" 
              />
            <p className="Name" >{Images[imageIndex].name}</p>
            <p className="ceo" >{Images[imageIndex].ceo}</p>
            <p className="Words" >{Images[imageIndex].desc}</p>
        </div>
      </div>
    );
  };
  
  export default ClientStories;
  