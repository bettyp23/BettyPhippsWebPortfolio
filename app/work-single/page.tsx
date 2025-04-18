
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function WorkSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work-single section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											work details
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Travila - Travel Booking App UI/UX Design
										</h3>
										<p className="text-300 fs-5 mb-0">
											The project involved creating an intuitive and visually appealing user interface, ensuring that users can effortlessly book flights, hotels, and car rentals all within a single app.
										</p>
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Client</p>
										<h6>Fushio Company</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Start</p>
										<h6>01 May 2024</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Complete</p>
										<h6>01 June 2024</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Services</p>
										<h6>UI/UX Design</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Website</p>
										<h6>fushion.wr</h6>
									</div>
								</div>
								<img src="/assets/imgs/work/img-background.png" alt="" />
								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										Travila is a comprehensive travel booking app designed to provide users with a seamless and enjoyable booking experience. The project involved creating an intuitive and visually appealing user interface, ensuring that users can effortlessly book flights, hotels, and car rentals all within a single app. The primary goal was to enhance the overall user experience, making travel planning easy and enjoyable.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Key Features</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">User-Centric Interface: <span className="text-300 fw-medium">Designed a clean and intuitive interface that allows users to navigate through the app with ease, ensuring a smooth and enjoyable booking process.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Integrated Search and Booking: <span className="text-300 fw-medium">Developed an integrated search function that enables users to find and book flights, hotels, and car rentals quickly and efficiently.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Personalized Recommendations: <span className="text-300 fw-medium">Implemented a recommendation system that suggests destinations, accommodations, and activities based on user preferences and past behaviors.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Secure Payment Gateway: <span className="text-300 fw-medium">Integrated a secure payment gateway to ensure that all transactions <span className="text-dark fw-bold">are safe and user data is protected.</span></span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Interactive Maps: <span className="text-300 fw-medium">Added interactive maps to help users explore destinations, find nearby attractions, and get directions.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Front-End: <span className="text-300 fw-medium">React Native for cross-platform mobile development, ensuring a consistent experience on both iOS and Android devices.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Back-End: <span className="text-300 fw-medium">Node.js and Express for handling server-side logic and database interactions.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Database: <span className="text-300 fw-medium">MongoDB for flexible data storage and retrieval.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">APIs: <span className="text-300 fw-medium">Integrated third-party APIs for flight, hotel, and car rental bookings to provide a wide range of options to users.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Payment Integration: <span className="text-300 fw-medium">Stripe API for secure and reliable payment processing.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Visual Appeal: <span className="text-300 fw-medium">Focused on a visually appealing design with high-quality images and a modern color palette to enhance user engagement.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Usability: <span className="text-300 fw-medium">Ensured the app is user-friendly with clear icons, concise labels, and a straightforward navigation structure.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Responsive Design: <span className="text-300 fw-medium">Made the app responsive to different screen sizes and orientations, providing a consistent user experience across various devices.</span></p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">12</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">250</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Projects</p>
													<p className="fs-5 mb-0 fw-bold">Completed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">680</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">18</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Awards</p>
													<p className="fs-5 mb-0 fw-bold">Won Received</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
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
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">Betty Phipps</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}