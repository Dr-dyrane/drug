// HeroSection.jsx
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const HeroSection = ({ scrollToDose }) => {
	return (
		<div className="min-h-screen text-center p-4 bg-blue-600 text-white flex items-center justify-start flex-col z-40">
			<div className="h-72 w-72 border border-0.s border-blue-500 rounded-full mt-20 animate-spin hover:animate-pulse bg-blue-500">
				<div className="h-64 w-64 border border-0.5 border-blue-400 rounded-full bg-blue-400">
					<div className="h-60 w-60 border border-0.5 border-blue-300 rounded-full bg-blue-300">
						<div className="h-56 w-56 border border-0.5 border-blue-200 rounded-full bg-blue-200">
							<div className="h-52 w-52 border border-0.5 border-blue-100 rounded-full bg-blue-100">
								<img
									src="/dddc.png"
									alt="Your Logo"
									className="h-52 animate-spin"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-5xl font-black my-4 text-start">
				Welcome to{" "}
				<span className="underline decoration-8 decoration-blue-400 text-blue-200 hover:animate-pulse">
					Dyrane'
				</span>
				s DDC
			</h1>
			<p className="text-base font-bold text-end italic bg-blue-400 p-4 rounded-xl text-slate-50">
				Your one-stop solution for accurate drug dosage calculations.
			</p>
			<FaAngleDoubleDown
				size={96}
				className="mt-20 animate-bounce hover:text-blue-300"
				onClick={scrollToDose}
			/>
		</div>
	);
};

export default HeroSection;
