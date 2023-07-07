import React from "react";
import { ReactComponent as FacebookIcon } from "../assets/icons/youtube.svg";
import { useNav } from "../route/customHooks/useNav";
// import GalleryBox from "../components/GalleryBox";
import "./Page.css";

import { realizationCategories } from "../assets/data/consts";

const Realizations = () => {
  const galleryRef = useNav("Realizations");

  return (
    <section ref={galleryRef} id="realizationsContainer">
      <div className="realizationsHeader">
        <FacebookIcon />
        <h1>NASZE REALIZACJE</h1>
      </div>
      <div className="category-list">
        {realizationCategories.map((category) => (
          <div key={category.id}>
            <div className="categorySquare">
              {/* <img src={category.image} alt="gdjasfb"></img> */}
              <h1 className="categoryTitle">{category.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realizations;
