import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import pikachu from "../../img/pikachu.jpg";
import dragon from "../../img/dragon.png";
import phoenix from "../../img/phoenix.jpg";
import meo from "../../img/meo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Container className="container-content">
          <Row className="row-content">
            <Col md={4} className="col-content">
              <h1>About Us</h1>
              <p className="content-about">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam itaque unde facere repellendus, odio et iste
                voluptatum aspernatur ratione mollitia tempora eligendi maxime
                est, blanditiis accusamus. Incidunt, aut, quis!
              </p>
              <div className="contact-about">
                <BsFillTelephoneFill className="phone-icon icon-about"></BsFillTelephoneFill>
                <p className="phone-contact">+08 3767 1711</p>
              </div>
              <div className="contact-about">
                <MdEmail className="phone-icon icon-about"></MdEmail>
                <p className="phone-contact">trantoan1101196@gmail.com</p>
              </div>
              <div className="input-contact">
                <input
                  className="input-email"
                  type="text"
                  placeholder="Enter your Email"
                ></input>
                <button className="btn-send-email">Send</button>
              </div>
            </Col>
            <Col md={4} className="col-content col-help">
              <div className="wrap-help-content">
                <h1>Help</h1>
                <div className="help-content">
                  <p className="content">Privacy</p>
                  <p className="content">Terms and Conditions</p>
                  <p className="content">Partners</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="col-content">
              <h1>Instagram</h1>
              <div className="image-content">
                  <Row>
                    <Col md={6}>
                      <img className="img-footer" src={pikachu}></img>
                    </Col>
                    <Col md={6}>
                      <img className="img-footer" src={dragon}></img>
                    </Col>
                    <Col md={6}>
                      <img className="img-footer" src={phoenix}></img>
                    </Col>
                    <Col md={6}>
                      <img className="img-footer" src={meo}></img>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
