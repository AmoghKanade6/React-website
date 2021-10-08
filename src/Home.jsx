/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { NavLink } from "react-router-dom";
import ae from "../src/images/after-effects-cc.svg";
import ps from "../src/images/photoshop-cc-4.svg";
import pr from "../src/images/premiere-cc.svg";
import i1 from "../src/images/shatter.png";
import i2 from "../src/images/glossy.png";
import i3 from "../src/images/rrr.png";
import i4 from "../src/images/electric.png";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="desc">
                    All Motion Graphics <br /> Designs And
                    <br />
                    <strong className="brand-name"> After Effects </strong>
                    Templates
                  </h1>
                  <h4 className="my-3 desc">
                    Logo Design and Animation , Title Animation , Cinematic
                    Intros and lot more!
                  </h4>
                  <div className="mt-3">
                    <NavLink to="/templates" className="btn-get-started">
                      More Info
                    </NavLink>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-4 order-2 order-lg-2 header-img">
                  <img src={ae} className="img-fluid animated" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="text-center desc mt-5">OUR SERVICES</h1>
              <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div class="col">
                  <div class="card card shadow p-3">
                    <img src={ae} class="card-img-top" alt={ae} />
                    <div class="card-body">
                      <h5 class="card-title desc">Animations</h5>
                      <p class="card-text ">
                        All Kinds of Animations are made including 3D, 2D,
                        Character contact here for more information.
                      </p>
                      <NavLink
                        to="/services"
                        className="btn btn-outline-dark rounded-pill mt-3"
                      >
                        More Info
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card shadow p-3">
                    <img src={pr} class="card-img-top" alt={pr} />
                    <div class="card-body">
                      <h5 class="card-title desc">Video Editing</h5>
                      <p class="card-text">
                        All Kinds of Video Editing including vfx and color
                        grading contact here for more information
                      </p>
                      <NavLink
                        to="/services"
                        className="btn btn-outline-dark rounded-pill mt-3"
                      >
                        More Info
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card shadow p-3">
                    <img src={ps} class="card-img-top" alt={ps} />
                    <div class="card-body">
                      <h5 class="card-title desc">Logo Designs</h5>
                      <p class="card-text">
                        All Kinds of Designs are made including Logo and Vector
                        contact here for more information
                      </p>
                      <NavLink
                        to="/services"
                        className="btn btn-outline-dark rounded-pill mt-3"
                      >
                        More Info
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="top-templates">
        <h1 className="text-center desc mt-5">TOP TEMPLATES</h1>
        <div class="container mt-3 mb-5">
          <div class="row p-4">
            <div class="col-md-6 mt-3 col-lg-3 img-fluid animated">
              <a
                href="https://drive.google.com/file/d/1Ynrys0l8ugir1YFh-kv3BxusID8_pj-G/view"
                target="_blank"
                className="text-decoration-none"
              >
                <img
                  src={i1}
                  className="img-fluid image-gallery"
                  alt="imrrge"
                />
                <h4 className="desc mt-2 text-center text-gallery">
                  Shatter Title Template
                </h4>
              </a>
            </div>
            <div class="col-md-6 mt-3 col-lg-3 img-fluid animated">
              <a
                href="https://drive.google.com/file/d/1409EebzrxUl48b9MmV44ej8YN5plRDGv/view"
                target="_blank"
                className="text-decoration-none"
              >
                <img src={i2} className="img-fluid image-gallery" alt="iage" />
                <h4 className="desc mt-2 text-center text-gallery">
                  Glossy Logo Template
                </h4>
              </a>
            </div>
            <div class="col-md-6 mt-3 col-lg-3 img-fluid animated">
              <a
                href="https://drive.google.com/file/d/1W8p-l86TW0ZMma1M1QQP4vAWDeIzNUfJ/view"
                target="_blank"
                className="text-decoration-none"
              >
                <img src={i3} className="img-fluid image-gallery " alt="iage" />
                <h4 className="desc mt-2 text-center text-gallery">
                  3D Title Template
                </h4>
              </a>
            </div>
            <div class="col-md-6 mt-3 col-lg-3 img-fluid animated">
              <a
                href="https://drive.google.com/file/d/1lkK0fH95ODp7Oh7nctw6RzdAKXr_JIqS/view"
                target="_blank"
                className="text-decoration-none "
              >
                <img
                  src={i4}
                  className="img-fluid image-gallery"
                  alt="im4age"
                />
                <h4 className="desc mt-2 text-center text-gallery">
                  Electric Neon Template
                </h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
