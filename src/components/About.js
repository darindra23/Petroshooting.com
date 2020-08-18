import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logohome.png';

export default function () {
	return (
		<>
			<Row className="justify-content-md-center" id="about" style={{ marginTop: '8vw', marginBottom: '3vw' }}>
				<Col xs lg="10">
					<strong className="faq">ABOUT US</strong>
				</Col>
			</Row>

			<div className="about-us">
				<img src={logo} alt="logo" />
				<p className="mt-2 ml-4" style={{ fontSize: '1.2vw', marginRight: '10vw' }}>
					<strong>Petroshooting Club</strong> adalah klub menembak yang terdaftar di PERBAKIN DKI Jaya.
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
