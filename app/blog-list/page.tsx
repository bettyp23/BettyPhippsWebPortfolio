
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogList() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-blog-list pt-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<div className="btn btn-gradient d-inline-block text-uppercase">
											Betty's Deep Dive
										</div>
										<h3 className="ds-3 mt-3 mb-4 text-300">
											Explore the <span className="text-dark">a deep dive</span> into the innovations transforming our industry.
										</h3>
										<p className="text-300 fs-5 mb-0">
											Here, I dive into the latest AI news, trends, and innovations, <br />
											while offering my own reflections on the ways we navigate our increasingly tech-driven world.
										</p>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">AI</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">April 18, 2025 • 3 min read</span>
											<h5 className="blog-card__title">Nvidia’s Pivotal Plans to Transform the U.S. AI Infrastructure</h5>
											<p className="blog-card__description fs-6">Nvidia officially announced groundbreaking plans to manufacture its AI supercomputers in the United States for the first time on April 14, 2025, marking a significant shift in its product strategy..</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="container">
						<div className="row py-120">
							<div className="d-flex justify-content-center align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										{/* <li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Previous">
												<i className="ri-arrow-left-line" />
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Next">
												<i className="ri-arrow-right-line" />
											</Link>
										</li> */}
									</ul>
								</nav>
							</div>
						</div>
					</div>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">20</span></span>
												<div className="text-start ms-2">
												<p className="fs-5 mb-0 text-300">Github</p>
												<p className="fs-5 mb-0 fw-bold">Projects</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">17</span></span>
												<div className="text-start ms-2">
												<p className="fs-5 mb-0 text-300">Workshops &</p>
												<p className="fs-5 mb-0 fw-bold">Presentations</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">5</span></span>
												<div className="text-start ms-2">
												<p className="fs-5 mb-0 text-300">Tech experience &</p>
												<p className="fs-5 mb-0 fw-bold">Internship and part-times</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">263</span></span>
												<div className="text-start ms-2">
												<p className="fs-5 mb-0 text-300">Hours Volunteering</p>
												<p className="fs-5 mb-0 fw-bold">& Mentoring</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-250">
						<div className="text-center">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200 mb-4 d-block text-center">
							I'm always open to new projects and collaborating with innovative minds!
							</span>

							<div style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
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
				</div>

			</Layout>
		</>
	)
}