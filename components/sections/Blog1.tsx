
// import Link from "next/link"

// export default function Blog1() {
// 	return (
// 		<>

// 			<section className="section-blog-1 position-relative pt-120 pb-120">
// 				<div className="container">
// 					<div className="row align-items-end">
// 						<div className="col-lg-7 me-auto">
// 							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Betty's Deep Dive</h3>
// 							<span className="fs-5 fw-medium text-200"> I break down the latest in AI news, trends, and innovations, offering my own reflections on what it all means for the future of tech, society, and beyond. Each post is an opinionated piece, written in hopes of sparking conversation and helping me truly immerse myself in the tech and AI space. </span>
// 						</div>
// 						<div className="col-lg-auto">
// 							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
// 								View more
// 								<i className="ri-arrow-right-up-line" />
// 							</Link>
// 						</div>
// 					</div>
// 					<div className="row mt-8">
// 						<div className="col-lg-4">
// 							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
// 								<div className="blog-card__image position-relative">
// 									<div className="zoom-img rounded-3 overflow-hidden">
// 										<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
// 										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">AI</Link>
// 										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
// 											<i className="ri-arrow-right-up-line text-dark" />
// 										</Link>
// 									</div>
// 								</div>
// 								<div className="blog-card__content position-relative text-center mt-4">
// 									<span className="blog-card__date fs-7">April 18, 2025 • 3 min read</span>
// 									<h5 className="blog-card__title">Nvidia’s Pivotal Plans to Transform the U.S. AI Infrastructure</h5>
// 									<p className="blog-card__description fs-6">Nvidia officially announced groundbreaking plans to manufacture its AI supercomputers in the United States for the first time on April 14, 2025, marking a significant shift in its product strategy..</p>
// 									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="row mt-8">
// 						<div className="col-lg-4">
// 							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
// 								<div className="blog-card__image position-relative">
// 									<div className="zoom-img rounded-3 overflow-hidden">
// 										<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
// 										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">AI</Link>
// 										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
// 											<i className="ri-arrow-right-up-line text-dark" />
// 										</Link>
// 									</div>
// 								</div>
// 								<div className="blog-card__content position-relative text-center mt-4">
// 									<span className="blog-card__date fs-7">April 18, 2025 • 3 min read</span>
// 									<h5 className="blog-card__title">Nvidia’s Pivotal Plans to Transform the U.S. AI Infrastructure</h5>
// 									<p className="blog-card__description fs-6">Nvidia officially announced groundbreaking plans to manufacture its AI supercomputers in the United States for the first time on April 14, 2025, marking a significant shift in its product strategy..</p>
// 									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }

// import Link from "next/link"

// export default function Blog1() {
// 	const blogPosts = Array.from({ length: 9 }, (_, i) => ({
// 		id: i + 1,
// 		title: `Nvidia’s Pivotal Plans to Transform the U.S. AI Infrastructure #${i + 1}`,
// 		date: "April 18, 2025 • 3 min read",
// 		description: "Nvidia officially announced groundbreaking plans to manufacture its AI supercomputers in the United States for the first time on April 14, 2025, marking a significant shift in its product strategy.",
// 		image: "/assets/imgs/blog/blog-1/img-1.png",
// 		tag: "AI",
// 		link: "/blog-details",
// 	}))

// 	return (
// 		<section className="section-blog-1 position-relative pt-120 pb-120">
// 			<div className="container">
// 				<div className="row align-items-end">
// 					<div className="col-lg-7 me-auto">
// 						<h3 className="ds-3 mt-3 mb-3 text-primary-1">Betty's Deep Dive</h3>
// 						<span className="fs-5 fw-medium text-200">
// 							I break down the latest in AI news, trends, and innovations, offering my own reflections on what it all means for the future of tech, society, and beyond. Each post is an opinionated piece, written in hopes of sparking conversation and helping me truly immerse myself in the tech and AI space.
// 						</span>
// 					</div>
// 					<div className="col-lg-auto">
// 						<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
// 							View more
// 							<i className="ri-arrow-right-up-line" />
// 						</Link>
// 					</div>
// 				</div>

// 				<div className="row mt-8">
// 					{blogPosts.map((post) => (
// 						<div className="col-lg-4 col-md-6 mb-5" key={post.id}>
// 							<div className="blog-card rounded-4 h-100 d-flex flex-column">
// 								<div className="blog-card__image position-relative">
// 									<div className="zoom-img rounded-3 overflow-hidden">
// 										<img className="w-100" src={post.image} alt="" />
// 										<Link
// 											className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
// 											href={post.link}
// 										>
// 											{post.tag}
// 										</Link>
// 										<Link
// 											href={post.link}
// 											className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle"
// 										>
// 											<i className="ri-arrow-right-up-line text-dark" />
// 										</Link>
// 									</div>
// 								</div>
// 								<div className="blog-card__content position-relative text-center mt-4">
// 									<span className="blog-card__date fs-7">{post.date}</span>
// 									<h5 className="blog-card__title">{post.title}</h5>
// 									<p className="blog-card__description fs-6">{post.description}</p>
// 									<Link href={post.link} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }






import Link from "next/link"

export default function Blog1() {
	const blogPosts = [
		{
			id: "1",
			title: "Nvidia to Build AI Supercomputers in the U.S.",
			date: "April 18, 2025 • 3 min read",
			description: "Nvidia plans to produce its AI chips and systems domestically, signaling a shift in global chip manufacturing.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "AI",
			link: "/blog-details",
		},
		{
			id: "2",
			title: "OpenAI's Next Frontier in Voice Models",
			date: "April 17, 2025 • 4 min read",
			description: "A deep dive into OpenAI's latest developments in speech synthesis and the ethical implications of ultra-realistic voices.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Voice AI",
			link: "/blog-details/page2.tsx",
		},
		{
			id: "3",
			title: "Meta’s Metaverse Strategy: 2025 Update",
			date: "April 16, 2025 • 5 min read",
			description: "Meta doubles down on its vision of virtual spaces as remote work and entertainment continue to evolve.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Metaverse",
			link: "/blog/3",
		},
		{
			id: "4",
			title: "Elon Musk's xAI: Real Progress or Hype?",
			date: "April 15, 2025 • 3 min read",
			description: "A breakdown of Elon Musk’s AI startup, xAI, and its newly released chatbot designed to rival GPT.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Startups",
			link: "/blog/4",
		},
		{
			id: "5",
			title: "Generative Art Tools for Non-Designers",
			date: "April 14, 2025 • 4 min read",
			description: "Exploring tools like Midjourney and Adobe Firefly that empower non-creatives to produce stunning visuals.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Design",
			link: "/blog/5",
		},
		{
			id: "6",
			title: "The Rise of Edge AI: Smarter Devices",
			date: "April 13, 2025 • 2 min read",
			description: "AI is moving from the cloud to the device. What does that mean for privacy and performance?",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Edge AI",
			link: "/blog/6",
		},
		{
			id: "7",
			title: "AI and Climate Modeling: Predicting the Unpredictable",
			date: "April 12, 2025 • 6 min read",
			description: "How AI models are revolutionizing climate forecasting and disaster preparedness globally.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Climate Tech",
			link: "/blog/7",
		},
		{
			id: "8",
			title: "Apple's AI Features in iOS 19",
			date: "April 11, 2025 • 3 min read",
			description: "Apple adds subtle but powerful AI upgrades to iOS. Here’s what’s new and why it matters.",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Mobile AI",
			link: "/blog/8",
		},
		{
			id: "9",
			title: "AI-Powered Coding: Should We Still Learn to Code?",
			date: "April 10, 2025 • 5 min read",
			description: "With tools like Copilot and ChatGPT writing code, what’s the future of software education?",
			image: "/assets/imgs/blog/blog-1/img-1.png",
			tag: "Education",
			link: "/blog/9",
		},
	]

	return (
		<section className="section-blog-1 position-relative pt-120 pb-120">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-lg-7 me-auto">
						<h3 className="ds-3 mt-3 mb-3 text-primary-1">Betty's Deep Dive</h3>
						<span className="fs-5 fw-medium text-200">
							I break down the latest in AI news, trends, and innovations, offering my own reflections on what it all means for the future of tech, society, and beyond. Each post is an opinionated piece, written in hopes of sparking conversation and helping me truly immerse myself in the tech and AI space.
						</span>
					</div>
					<div className="col-lg-auto">
						<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
							View more
							<i className="ri-arrow-right-up-line" />
						</Link>
					</div>
				</div>

				<div className="row mt-8">
					{blogPosts.map((post) => (
						<div className="col-lg-4 col-md-6 mb-5" key={post.id}>
							<div className="blog-card rounded-4 h-100 d-flex flex-column">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src={post.image} alt={post.title} />
										<Link
											className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
											href={post.link}
										>
											{post.tag}
										</Link>
										<Link
											href={post.link}
											className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle"
										>
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">{post.date}</span>
									<h5 className="blog-card__title">{post.title}</h5>
									<p className="blog-card__description fs-6">{post.description}</p>
									<Link href={post.link} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
