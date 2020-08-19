import React from 'react';
import { Row, Col } from 'react-bootstrap';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function () {
	return (
		<>
			<Row className="justify-content-md-center" id="contact">
				<Col xs lg="10" style={{ marginTop: '15vw', marginBottom: '5vw' }}>
					<strong className="faq-mobile">CONTACT US</strong>
				</Col>
			</Row>
			<div
				className="contact-us"
				onClick={() =>
					window.open(`https://api.whatsapp.com/send?phone=62811865129&text=Halo,%20admin%20Petroshooting%20Club.`)
				}
			>
				<p
					onClick={() =>
						window.open(`https://api.whatsapp.com/send?phone=62811865129&text=Halo,%20admin%20Petroshooting%20Club.`)
					}
				>
					<WhatsAppIcon
						style={{ marginLeft: '5vw', fontSize: '15vw' }}
						onClick={() =>
							window.open(`https://api.whatsapp.com/send?phone=62811865129&text=Halo,%20admin%20Petroshooting%20Club.`)
						}
					/>
				</p>
				<p
					onClick={() =>
						window.open(`https://api.whatsapp.com/send?phone=62811865129&text=Halo,%20admin%20Petroshooting%20Club.`)
					}
				>
					Contact Us Via WhatsApp +62811-865-129
				</p>
			</div>
		</>
	);
}
