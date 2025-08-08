import deliveryImg from '../assets/hero-img.png';
import { useNavigate} from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    function handleFClick(){
        navigate("/food");
    }

  return (
    <div>
      <div className="container my-5">
      <div className="row align-items-center">
    
      <div className="col-md-6">
      <h1 className="display-5 fw-bold">Get anything delivered — Fast & Easy!</h1>
      <p className="lead">One app for food, groceries, and rides. Just tap and go.</p>
      <button className="btn btn-primary btn-lg mt-3" onClick={handleFClick} >Order Now</button>
      </div>

    <div className="col-md-6 text-center">
      <img src={deliveryImg} alt="Delivery Illustration" className="img-fluid" />
    </div>

     </div>
     </div>

    </div>
  );
}