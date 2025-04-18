
'use client'
import CountUp from 'react-countup'
export default function Static2() {
	return (
		<>

			<div className="section-static-1 z-0">
				<div className="container position-relative z-1">
					<div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
						<div className="inner">
							<div className="row align-items-center justify-content-lg-around justify-content-center">
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<i className="ri-shape-line text-primary-2" />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={20} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-5 mb-0 text-300">Github</p>
											<p className="fs-5 mb-0 fw-bold">Projects</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<i className="ri-computer-line text-primary-2" />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={17} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-5 mb-0 text-300">Workshops &</p>
											<p className="fs-5 mb-0 fw-bold">Presentations</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<i className="ri-service-line text-primary-2" />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={5} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-5 mb-0 text-300">Tech experience &</p>
											<p className="fs-5 mb-0 fw-bold">Internship and part-times</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<i className="ri-award-line text-primary-2" />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={263} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-5 mb-0 text-300">Hours Volunteering</p>
											<p className="fs-5 mb-0 fw-bold">& Mentoring</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="background position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/home-page-2/static/bg.png" />
					</div>
				</div>
			</div>

		</>
	)
}
