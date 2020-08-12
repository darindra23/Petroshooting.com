import React from "react";
import { Row, Col } from "react-bootstrap";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function () {
  return (
    <>
      <Row className="justify-content-md-center" id="contact">
        <Col xs lg="10" style={{ marginTop: "15vw", marginBottom: "5vw" }}>
          <strong className="faq-mobile">CONTACT US</strong>
        </Col>
      </Row>
      <div className="contact-us">
        <p>
          <WhatsAppIcon style={{ marginLeft: "5vw", fontSize: "15vw" }} />
        </p>
        <p>Contact Us Via WhatsApp +62811-1383-870</p>
      </div>
    </>
  );
}
