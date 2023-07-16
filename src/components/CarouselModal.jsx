import Slider from "../assets/index";
import "../styles/CarouselModal.css";
import { carouselGallery as content } from "../assets/data/consts";

// dokumentacja carousel
// github.com/erichbehrens/react-animated-slider/blob/master/src/pages/examples/Custom.js
// https://eb1.it/react-animated-slider/

function Custom() {
  return (
    <div className="carouselModal" style={{ width: "100%" }}>
      <Slider>
        {content.map((item, index) => {
          const imageStyles = {
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "top",
          };
          return (
            <div key={index} className="sliderContent" style={imageStyles}>
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={() => alert("przekierowanie do")}>
                  {item.button}
                </button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Custom;
