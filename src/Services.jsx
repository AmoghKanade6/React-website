import React from "react";
import ae from "../src/images/after-effects-cc.svg";
import ps from "../src/images/photoshop-cc-4.svg";
import pr from "../src/images/premiere-cc.svg";
import au from "../src/images/au.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center desc mt-5">Our Services</h1>
            <div className="row gy-3">
              <ServiceCard
                serviceimg={ae}
                title="ANIMATION"
                desc="All Kinds of Animations are made including 3D, 2D, Character and motion poster please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={pr}
                title="VIDEO EDITING"
                desc="All Kinds of video editing are made including vfx and color grading please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={ps}
                title="LOGO DESIGNS"
                desc="All Kinds of designs are made including logos, vectors and custom templates please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={au}
                title="SONG KARAOKES"
                desc="All Music Karaokes are made with best Beats, less noice and 100% vocal removal please feel free to Mail Here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
