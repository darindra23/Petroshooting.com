import React from "react";
import logo from "../assets/images/logo.png";

import { Row, Col } from "react-bootstrap";

export default function () {
  return (
    <>
      <Row className="justify-content-md-center" id="about">
        <Col xs lg="10" style={{ marginTop: "15vw", marginBottom: "7.5vw" }}>
          <strong className="faq-mobile">ABOUT US</strong>
        </Col>
      </Row>

      <div className="about-us-mobile">
        <img src={logo} alt="logo" />
        <p className="mt-2" style={{ fontSize: "2.5vw" }}>
          <strong>Petroshooting Club</strong> merupakan klub menembak yang
          didirikan pada tahun 2017 dan terdaftar menjadi anggota PERBAKIN. Kami
          memiliki visi bahwa seluruh masyarakat harus memiliki akses yang sama
          terhadap olahraga yang diminatinya, sehingga kami memfasilitasi untuk
          memberikan akses terhadap olahraga menembak kepada masyarakat.
        </p>
      </div>
    </>
  );
}
