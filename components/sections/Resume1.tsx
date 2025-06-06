import Link from "next/link"

export default function Resume1() {
	return (
		<>

			<section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="assets/imgs/projects/projects-1/background.png">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">About Me</h3>
							<span className="fs-5 fw-medium text-200">
								I’m a computer science student at FSU passionate about bridging technology, entrepreneurship, and impactful innovation to solve real-world problems.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get in touch
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6">
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-1.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Education</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">Jun 2022 - May 2026 (expected)</p>
												<h5>B.S. in Computer Science, Minor in Entrepreneurship</h5>
												<p className="text-300 mb-0">Florida State University</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold"><span className="fs-4 fw-bold"></span></h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">Jan 2022 - May 2023</p>
												<h5>Dual Enrollment Coursework</h5>
												<p className="text-300 mb-0">Broward College</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold"><span className="fs-4 fw-bold"></span></h3>
										</div>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">Sep 2024 - Nov 2024</p>
												<h5>Technical Interview Prep, Computer Programming</h5>
												<p className="text-300 mb-0">CodePath*Org</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold"><span className="fs-4 fw-bold"></span></h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experience</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">May 2024 – Aug 2024</p>
										<h5>IT Business Analyst Intern</h5>
										<p className="text-300 mb-0">NextEra Energy</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Dec 2023 – May 2024</p>
										<h5>Help Desk Technician</h5>
										<p className="text-300 mb-0">FSU College of Communication & Information</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Dec 2024 – Mar 2025</p>
										<h5>Computer Systems Operator</h5>
										<p className="text-300 mb-0">The Florida Lottery</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Leadership & Invovlment</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Jan 2024 – May 2024</p>
										<h5>President</h5>
										<p className="text-300 mb-0">CodeEducation</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Aug 2024 – Dec 2024</p>
										<h5>Judge, Mentor, Presenter</h5>
										<p className="text-300 mb-0">Florida Technology Student Association</p>
									</div>
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">May 2023 – Mar 2025</p>
										<h5>Leader, Presenter, Educator</h5>
										<p className="text-300 mb-0">(STARS) Students & Technology in Academia, Research & Service</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-relative pb-160 pt-lg-150">
					<div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
						<h3 className="stroke fs-150 text-uppercase text-white">Code . Create . Lead</h3>
					</div>
				</div>
			</section>

		</>
	)
}
