
import Link from "next/link"

export default function Contact1() {
	return (
			<>
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-250">
						<div className="text-center">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200 mb-4 d-block text-center">
							I'm always open to new projects and collaborating with innovative minds!
							</span>

							<div style={{ textAlign: 'center' }}>
							<a
								href="mailto:bp23e@fsu.edu"
								className="btn"
								style={{
								backgroundColor: '#6f42c1',
								color: 'white',
								padding: '10px 20px',
								borderRadius: '5px',
								}}
							>
								Contact Me
							</a>
							</div>
						</div>

						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900" style={{ zIndex: 0 }}>
							<div className="wow img-custom-anim-top">
							<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">Betty Phipps</h3>
							</div>
						</div>
					</section>

		</>
	)
}
