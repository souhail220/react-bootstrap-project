import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Contact = () => {
  return (
    <section className="block contact-block" id="contact">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <div className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email adress"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your contact message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </Container>
      <div className="google-map">
        <iframe
          title="moknine city"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25942.326436954547!2d10.878868499779093!3d35.63288337718004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021728b1c71cf7%3A0x7186b585e43e213b!2sMoknine!5e0!3m2!1sen!2stn!4v1719225136403!5m2!1sen!2stn"
          width="600"
          height="450"
          style={{ marginRight: 0 + "em" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Container fluid>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>hello@domain.com
              </li>
              <li>
                <i className="fas fa-phone"></i>000-000-0000
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>Moknine, Monastir
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};
