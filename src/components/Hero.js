import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const AppHero = () => {
  var heroData = [
    {
      id: 1,
      image: require("../assets/images/img-hero1.jpg"),
      title: "The perfect design for your website",
      description: `Nulla vitae elit libero, a pharetra augue mollis interdum.`,
      link: "https://www.google.com",
    },

    {
      id: 2,
      image: require("../assets/images/img-hero2.jpg"),
      title: "Start Your Future Financial Plan",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Provident qui tempora quo, saepe praesentium magni illum amet,
            modi architecto quidem explicabo natus quas inventore. Odit eligendi quae saepe repellendus quidem.`,
      link: "https://www.facebook.com",
    },

    {
      id: 3,
      image: require("../assets/images/img-hero3.jpg"),
      title: "Enjoy The Difference",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Provident qui tempora quo, saepe praesentium magni illum amet,
            modi architecto quidem explicabo natus quas inventore. Odit eligendi quae saepe repellendus quidem.`,
      link: "https://www.youtube.com",
    },
  ];
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                src={hero.image}
                alt={hero.title}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a href={hero.link} className="btn btn-primary">
                  Learn More
                  <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};
