import React from "react";
import useWindowSize from "../helpers/useWindowSize";
import Logo from "../assets/images/footer.png";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function () {
  const [width, height] = useWindowSize();

  return (
    <div className="footer-mobile">
      <div
        className={
          width >= 768 && height >= 1024 ? "footer-nav-mobile" : "footer-nav"
        }
      >
        <img src={Logo} alt="logo" />
        <a href="#home">HOME</a>
        <a href="#faq">FAQ</a>
        <a href="#about">ABOUT US</a>
      </div>
      <div className="info-mobile">
        <p>CONTACT US</p>
        <p>
          <MailOutlineIcon style={{ fontSize: "3vw" }} /> &nbsp;:&nbsp;
          info@petroshooting.com
        </p>
        <p>
          <InstagramIcon style={{ fontSize: "3vw" }} /> &nbsp;:&nbsp;
          @Petroshoot
        </p>
        <p>
          <WhatsAppIcon style={{ fontSize: "3vw" }} /> &nbsp;:&nbsp;
          0811-1383-870
        </p>
      </div>
    </div>
  );
}
