import Link from "next/link"

export default function Home1() {
	return (
		<>
			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">👋 Hi there, I'm Betty</span>
							<h1 className="ds-2 mb-3">Betty Phipps <span className="text-primary-1">Website Portfolio</span></h1>
							<p className="text-300 mb-6">
								This portfolio highlights my skills, leadership, and projects as a computer science student, showcasing my growth in software development, entrepreneurship, and my commitment to innovation.
							</p>
							<a 
								href="https://www.linkedin.com/in/bettyphipps/overlay/1719062541735/single-media-viewer/?profileId=ACoAAEAubNoBlh476--cym8Q6f8Vy3HF_SKCrQo"
								className="btn btn-gradient me-2" 
								target="_blank" 
								rel="noopener noreferrer"
								>
								Download Resume
								<i className="ri-download-line ms-2" />
								</a>
								{/* <a 
								href="/assets/resume/ResumeBettyPhipps.pdf"
								className="btn btn-gradient me-2" 
								download
								>
								Download Resume
								<i className="ri-download-line ms-2" />
								</a> */}
							<Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>Connect with me!</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link>
							<p className="text-400 mt-6 mb-3">3rd year Computer Science Student at Florida State University</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-1.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-2.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-3.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-4.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-5.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<img src="/assets/imgs/hero/hero-1/brand-6.png" alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img
						className="position-relative z-1 filter-gray"
						src="/assets/imgs/hero/hero-1/man.png"
						alt="man"
						style={{
							width: '500px', 
							height: 'auto',
						}}
					/>
					    <div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
      					  <img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="Decorative Spin" />
    					</div>
					</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>
		</>
	)
}

