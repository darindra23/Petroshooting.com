import React from 'react';
import Logo from '../assets/images/footer.png';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

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
						<MailOutlineIcon fontSize={'small'} /> &nbsp;:&nbsp; info@petroshoot.com
					</p>
					<p>
						<InstagramIcon fontSize={'small'} /> &nbsp;:&nbsp; @Petroshoot
					</p>
					<p
						onClick={() =>
							window.open(`https://api.whatsapp.com/send?phone=62811865129&text=Halo,%20admin%20Petroshooting%20Club.`)
						}
					>
						<WhatsAppIcon fontSize={'small'} /> &nbsp;:&nbsp; +62 811-865-129
					</p>
				</div>
			</div>
		</>
	);
}
