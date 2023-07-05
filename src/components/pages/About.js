import React from "react";
import { useNav } from "../../route/customHooks/useNav";
import "./Page.css";

const About = () => {
  const aboutRef = useNav("About");
  console.log(aboutRef);
  return (
    <section ref={aboutRef} id="aboutContainer">
      <div className="salon-photo" style={{ width: "400px" }}>
        <div>
          <img src="https://picsum.photos/400/400" alt="example"></img>
        </div>
        <div className="about_out_frame"></div>
      </div>
      <div className="aboutUs" style={{ maxWidth: "500px" }}>
        <h2 style={{ fontSize: "30px" }}>O nas</h2>
        <div className="about-frame">
          <article>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
