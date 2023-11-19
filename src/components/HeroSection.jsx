// HeroSection.jsx
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const HeroSection = ({ scrollToDose }) => {
	return (
		<div className="min-h-screen text-center p-4 bg-blue-600 text-white flex items-center justify-start flex-col z-40">
			<img
				src="/dddc.png"
				alt="Your Logo"
				className="h-52 animate-spin mt-20"
			/>
			<h1 className="text-4xl font-bold mb-4">Welcome to Dyrane's DDC</h1>
			<p className="text-lg font-semibold">
				Your one-stop solution for accurate drug dosage calculations.
			</p>
			<FaAngleDoubleDown
				size={80}
				className="m-8 animate-bounce"
				onClick={scrollToDose}
			/>
		</div>
	);
};

export default HeroSection;
