
import Link from "next/link"

export default function Blog1() {
	return (
		<>

			<section className="section-blog-1 position-relative pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Betty's Deep Dive</h3>
							<span className="fs-5 fw-medium text-200"> I break down the latest in AI news, trends, and innovations, offering my own reflections on what it all means for the future of tech, society, and beyond. Each post is an opinionated piece, written in hopes of sparking conversation and helping me truly immerse myself in the tech and AI space. </span>
						</div>
						<div className="col-lg-auto">
							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View more
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-8">
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
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

		</>
	)
}
