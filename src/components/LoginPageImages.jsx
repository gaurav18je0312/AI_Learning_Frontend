import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/ad1.png";
import image2 from "../assets/ad2.png";

function LoginPageImages() {
  return (
    <div className="carousel-container">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image1} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image2} alt="Image Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LoginPageImages;
