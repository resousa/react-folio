import React from "react";
import Carousel from "react-bootstrap/Carousel";
import searchPic from "../../assets/images/search.png";
import Planner from "../../assets/images/planner.png";
import Dashboard from "../../assets/images/dashboard.PNG"

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={Dashboard}
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
        <h2><a class="nav-item nav-link" id="blackLink"
                            href="https://github.com/resousa/project-2">Sneaker CRM</a></h2>
                        <p>JavaScript, React, Sequelize</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={searchPic} alt="second slide" height= "600px" />
        <Carousel.Caption>
          <h2>
            <a
              className="nav-item nav-link"
              id="whiteLink"
              href="https://frantzcfelix.github.io/Eventify-your-map/"
            >
              Eventify your map
            </a>
          </h2>
          <p>
            JavaScript, jQuery, Bulma, Moment.js, Ticketmaster API, Google Maps
            API, W3C Geolocation API
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Planner}
          alt="Third slide"
          height="600px"
        />

        <Carousel.Caption>
        <h2><a class="nav-item nav-link" id="whiteLink"
                            href="https://resousa.github.io/daily-work-planner/">Day planner</a></h2>
                        <p>JavaScript, jQuery, Bootstrap, Moment.js, local storage</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;
