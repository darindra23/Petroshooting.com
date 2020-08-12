import React from "react";
import Logo from "../assets/images/footer.png";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function () {
  return (
    <>
      <div className="footer">
        <div className="footer-a">
          <img src={Logo} alt="logo" />
          <a href="#home">HOME</a>
          <a href="#faq">FAQ</a>
          <a href="#about">ABOUT US</a>
        </div>
        <div className="info" id="contact">
          <p>CONTACT US</p>
          <p>
            <MailOutlineIcon fontSize={"small"} /> &nbsp;:&nbsp;
            info@petroshooting.com
          </p>
          <p>
            <InstagramIcon fontSize={"small"} /> &nbsp;:&nbsp; @Petroshoot
          </p>
          <p>
            <WhatsAppIcon fontSize={"small"} /> &nbsp;:&nbsp; 0811-1383-870
          </p>
        </div>
      </div>
    </>
  );
}
