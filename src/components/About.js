import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

const AppAbout = () => {
  const html = 40;
  const responsive = 95;
  const photoshop = 60;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About us</h2>
          <div className="subtitle">Learn More About Us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi ducimus dolorum, neque ut tempora quae praesentium.
              Ipsam debitis at tenetur quae maxime a modi expedita? Porro saepe
              quasi ullam animi.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ab
              eaque ea voluptatibus possimus! Consectetur dignissimos repellat
              quo eligendi impedit, quaerat necessitatibus molestias dolorum vel
              consequatur iusto architecto sapiente maiores!
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>

            <div className="progress-block">
              <h4>RESPONSIVE</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>

            <div className="progress-block">
              <h4>PHOTOSHOP</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppAbout;
