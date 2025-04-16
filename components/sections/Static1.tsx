
'use client'
import CountUp from 'react-countup'

export default function Static1() {
	return (
		<>

			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={20} className="odometer ds-1 text-dark fw-semibold" /></span>
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
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={17} className="odometer ds-1 text-dark fw-semibold" /></span>
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
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={5} className="odometer ds-1 text-dark fw-semibold" /></span>
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
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={263} className="odometer ds-1 text-dark fw-semibold" /></span>
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

		</>
	)
}
