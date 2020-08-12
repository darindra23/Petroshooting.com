import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";

export default function () {
  return (
    <>
      <Row
        className="justify-content-md-center"
        id="about"
        style={{ marginTop: "8vw", marginBottom: "3vw" }}
      >
        <Col xs lg="10">
          <strong className="faq">ABOUT US</strong>
        </Col>
      </Row>

      <div className="about-us">
        <img src={logo} alt="logo" />
        <p
          className="mt-2 ml-4"
          style={{ fontSize: "1.5vw", marginRight: "10vw" }}
        >
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
