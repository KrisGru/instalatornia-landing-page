import Slider from "../assets/index";
import "./CarouselModal.css";
import { carouselGallery as content } from "../assets/data/consts";

// dokumentacja carousel
// github.com/erichbehrens/react-animated-slider/blob/master/src/pages/examples/Custom.js
// https://eb1.it/react-animated-slider/

function Custom() {
  return (
    <div className="carouselModal" style={{ width: "100%" }}>
      {/* <h2>Custom style and animations</h2> */}
      <Slider>
        {content.map((item, index) => (
          <div
            key={index}
            className="sliderContent"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Custom;
