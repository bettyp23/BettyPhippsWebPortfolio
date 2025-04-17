'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				{/* <div className="text-start">
					{/* <div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("brand")} onClick={handleFilterKeyChange("brand")}>Branding</button>
						<button className={activeBtn("webdesign")} onClick={handleFilterKeyChange("webdesign")}>Web Design</button>
						<button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>UI/UX</button>
						<button className={activeBtn("app")} onClick={handleFilterKeyChange("app")}>App Dev</button>
					</div> }
				</div> */}
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 brand ui app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<div>
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-1.png" alt="infinia" />
							</div>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/bettyp23/AI-NLP-Analysis-and-Stock-Data-Script" className="project-card-content">
									<h3 className="fw-semibold">NLP Stock Data</h3>
									<p>Pre-trained sentiment analysis model from HuggingFace, based on 
										       transformer architectures (e.g., BERT, DistilBERT).</p>
								</Link>
								<div className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</div>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 webdesign brand dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<div>
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-2.png" alt="infinia" />
							</div>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/bettyp23/AI-Powered-Stock-Sentiment-Investment-Advisor" className="project-card-content">
									<h3 className="fw-semibold">AI Investment Advisor</h3>
									<p>provide investment advice related to a specific stock, and combines this with real-time stock price data.</p>
								</Link>
								<div className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</div>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 ui app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<div>
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-3.png" alt="infinia" />
							</div>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold">CodePathTIP</h3>
									<p>Algorithmic Thinking & Problem Solving · Data Structures & Complexity Analysis · Systems & Object-Oriented Design · Sorting Algorithms</p>
								</div>
								<Link href="https://github.com/bettyp23/CodePathTIP" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 app app dataanalysis brand">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<div>
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-4.png" alt="infinia" />
							</div>
							<div className="d-flex align-items-center mt-4">
								<Link href="https://github.com/bettyp23/Project.0_SpaceInvaders" className="project-card-content">
									<h3 className="fw-semibold">Space Invaders Game</h3>
									<p>Developed a dynamic, grid-based C++ game inspired by Space Invaders</p>
								</Link>
								<div className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
