import React from 'react';
import logo from '../assets/images/logomobile.png';

import { Row, Col } from 'react-bootstrap';

export default function () {
	return (
		<>
			<Row className="justify-content-md-center" id="about">
				<Col xs lg="10" style={{ marginTop: '15vw', marginBottom: '7.5vw' }}>
					<strong className="faq-mobile">ABOUT US</strong>
				</Col>
			</Row>

			<div className="about-us-mobile">
				<img src={logo} alt="logo" />
				<p className="mt-2" style={{ fontSize: '2.5vw' }}>
					<strong>Petroshooting Club</strong> adalah Petroshooting Club adalah klub menembak yang terdaftar di PERBAKIN
					DKI Jaya.
					<br />
					<br />
					Visi Petroshooting Club adalah menjadi klub menembak dengan atlet yang berprestasi untuk kebanggaan bangsa
					Indonesia.
					<br />
					<br />
					Misi Petroshooting Club :
					<br />
					1. Memberikan pelatihan kepada masyarakat yang berminat olahraga menembak.
					<br />
					2. Menanamkan kesadaran dan disiplin serta memumupuk kegemaran berolahraga menembak dan berburu anggotanya
					untuk mencapai prestasi dengan memperhatikan dan ikut serta membina kelestarian alam & linkungan.
					<br />
					3. Memberikan edukasi tentang olahraga menembak secara kesinambungan kepada masyarakat
					<br />
					4. Menyebarluaskan tata cara pelaksanaan olahraga menemnbak secara teratur sesuai dengan ketentuan-ketentuan
					perundang-undangan dan peraturan-peraturan yand ditetapkan oleh Pemerintah.
					<br />
					5. Menyelenggarakan pendidikan dan pelatihan bagi pelatih-pelatih dan tenaga-tenaga terampil yang diperlukan
					dalam menunjang olahraga menembak.
					<br />
					6. Merencanakan dan menyelenggarakan kegiatan olahraga bagi anggotanya dan mengikuti pertandingan-pertandingan
					menembak.
				</p>
			</div>
		</>
	);
}
