import React from "react";
import { useNav } from "../route/customHooks/useNav";
import { ReactComponent as FacebookIcon } from "../assets/icons/pin.svg";
import CarouselModal from "../components/CarouselModal";
import "./Page.css";

const Contact = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement
  const contactRef = useNav("Contact");
  return (
    <section ref={contactRef} id="contactContainer">
      <div className="contactHeader">
        <FacebookIcon />
        <h1>KONTAKT</h1>
      </div>
      <CarouselModal />
    </section>
  );
};

export default Contact;
