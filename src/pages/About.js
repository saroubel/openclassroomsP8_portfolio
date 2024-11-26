import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import Testimonial from "../components/Testimonial";
import { Image } from "../components/common/Image";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>A propos - Portfolio de Sara Bellaf</title>
        <meta
          name="description"
          content="Page a propos du Portfolio de Sara Bellaf"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="A propos" />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <Image
                    src={information.aboutImage}
                    loader="/images/about-image-placeholder.png"
                    alt="aboutimage"
                    onClick={() => handleToggler(!toggler)}
                  />
                  <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={toggler}
                    sources={[information.aboutImageLg]}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    Je suis <span className="color-theme">{information.name}</span>
                  </h3>
                  <p>
                  Je suis développeuse web Full stack, 
                  avec une expertise en front-end utilisant React et en back-end avec Node.js. 
                  Mon expérience me permet de créer des sites et des applications web performantes et réactives, 
                  alliant une interface utilisateur intuitive à un backend robuste.
                  Chaque projet est pour moi une opportunité d'améliorer mes compétences techniques et de découvrir des technologies innovantes.
                  </p>
                  <ul>
                    {!information.name ? null : (
                      <li>
                        <b>Nom complet </b> {information.name}
                      </li>
                    )}
                    {/* {!information.age ? null : (
                      <li>
                        <b>Age</b> {information.age} Years
                      </li>
                    )} */}
                    {!information.phone ? null : (
                      <li>
                        <b>TelePhone</b> {information.phone}
                      </li>
                    )}
                    {/* {!information.nationality ? null : (
                      <li>
                        <b>Nationnalté</b> {information.nationality}
                      </li>
                    )} */}
                    {!information.language ? null : (
                      <li>
                        <b>Langues</b> {information.language}
                      </li>
                    )}
                    {!information.email ? null : (
                      <li>
                        <b>Email</b> {information.email}
                      </li>
                    )}
                    {!information.address ? null : (
                      <li>
                        <b>Addresse</b> {information.address}
                      </li>
                    )}
                    {!information.freelanceStatus ? null : (
                      <li>
                        <b>Disponibilité</b> {information.freelanceStatus}
                      </li>
                    )}
                  </ul>
                  <a href={information.cvfile} className="mi-button">
                    Téléchager mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Services" />
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                {services.map((service) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-30"
                    key={service.title}
                  >
                    <Service content={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default About;
