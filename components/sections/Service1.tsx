
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">What I'm Passionate About</h3>
							<span className="fs-5 fw-medium text-200">focusing on the skills I'm mastering and the areas of tech that excite me,
								<br />
								all while working towards making a meaningful impact.
							</span>
						</div>
						<div className="col-lg-auto">
							<div className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Learn more
								<i className="ri-arrow-right-up-line" />
							</div>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<div>
											<span className="service-number">01. </span>
											Technology / Software Solutions
										</div>
									</h3>
									<div className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
										I’m passionate about solving complex challenges with simple, efficient solutions that meet technical needs while pushing<br />
										creative boundaries.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											{/* <i className="ri-arrow-right-up-line" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1}>
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<div>
											<span className="service-number">02. </span>
											Data Science & AI
										</div>
									</h3>
									<div className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											turning data into insights that help solve problems <br />
											and drive smarter decisions for people and businesses.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											{/* <i className="ri-arrow-right-up-line" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1}>
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<div>
											<span className="service-number">03. </span>
											Leadership & mentoring
										</div>
									</h3>
									<div className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Great things happen when creative people work together, <br />
											helping to build strong teams that embrace challenges and inspire each other.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											{/* <i className="ri-arrow-right-up-line" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} >
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<div>
											<span className="service-number">04. </span>
											Entrepreneurship
										</div>
									</h3>
									<div className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Constantly pushing myself to create value and make a meaningful difference, solely driven with my own creativity and innovation<br />
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											{/* <i className="ri-arrow-right-up-line" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
